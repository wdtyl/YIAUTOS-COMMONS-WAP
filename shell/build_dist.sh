rm -rf ../yiautos-commons-wap &&

mkdir ../yiautos-commons-wap &&

cd ../yiautos-commons-wap &&

mkdir lib &&

cp ../res/package.json ./ &&

cp -r ../res/types ./ &&

cp ../output/yiwaplib.umd.min.js ./lib/yiwaplib.js &&

cp ../output/yiwaplib.css ./lib &&

cd .. &&

rm -rf node_modules/yiautos-commons-wap &&

cp -r yiautos-commons-wap/ node_modules/yiautos-commons-wap/ &&

echo "YiautosLib打包成功!"


