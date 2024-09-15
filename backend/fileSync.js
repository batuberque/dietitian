const chokidar = require("chokidar");
const { Storage } = require("@google-cloud/storage");
const path = require("path");

const storage = new Storage({ keyFilename: process.env.GCLOUD_KEY_FILE });
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

const watcher = chokidar.watch("uploads/", { persistent: true });

watcher
  .on("add", (filePath) => {
    const fileName = path.basename(filePath);
    // console.log(`Dosya eklendi: ${fileName}`);
    bucket
      .upload(filePath, {
        destination: `uploads/${fileName}`,
      })
      .then(() => console.log(`${fileName} GCS'ye yüklendi.`))
      .catch((err) => console.error(`Yükleme hatası: ${err}`));
  })
  .on("unlink", (filePath) => {
    const fileName = path.basename(filePath);
    // console.log(`Dosya silindi: ${fileName}`);
    bucket
      .file(`uploads/${fileName}`)
      .delete()
      .then(() => console.log(`${fileName} GCS'den silindi.`))
      .catch((err) => console.error(`Silme hatası: ${err}`));
  });
