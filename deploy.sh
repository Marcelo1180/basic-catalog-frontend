rm -fr docs
NODE_ENV=production npm run build
mv dist docs
