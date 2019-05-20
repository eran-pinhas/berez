npm run build
gsutil -m rm -r gs://staging.havruta.appspot.com/**
gsutil -m cp -r dist/* gs://staging.havruta.appspot.com