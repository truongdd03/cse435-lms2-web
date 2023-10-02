ssh truongd1@arctic.cse.msu.edu 

cd ./web/

rm -r -f assets/
rm -f 404.html
rm -f favicon.ico
rm -f index.html
exit

cd ./dist
scp -r * truongd1@arctic.cse.msu.edu:/user/truongd1/web
chmod 755 -R ~/web/
