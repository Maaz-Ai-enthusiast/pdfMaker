import express from 'express';
import multer from 'multer';
import docxConverter from 'docx-pdf';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
// Ensure 'uploads' and 'files' directories exist
import fs from 'fs';
const ensureDirectoryExistence = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
ensureDirectoryExistence(path.join(__dirname, 'uploads'));
ensureDirectoryExistence(path.join(__dirname, 'files'));

// Setting up the file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads')); // Ensure 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with its original name
  },
});

const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/convertFile', upload.single('file'), (req, res) => {
  console.log("Route hits");
  
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    const inputPath = req.file.path;
    const outputFileName = `${path.parse(req.file.originalname).name}.pdf`;
    const outputPath = path.join(__dirname, 'files', outputFileName);

    // Convert the .docx file to .pdf
    docxConverter(inputPath, outputPath, (err, result) => {
      if (err) {
        console.error('Error during file conversion:', err);
        return res.status(500).json({ message: 'File conversion failed', error: err.message });
      }

      console.log('Conversion result:', result);

      // Respond with the converted file
      res.download(outputPath, (downloadErr) => {
        if (downloadErr) {
          console.error('Error during file download:', downloadErr);
        } else {
          console.log('File downloaded successfully!');
        }
      });
    });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
