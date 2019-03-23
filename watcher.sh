scriptPath=$1
inputPath=$2

while :
do
    inotifywait -e modify $scriptPath && ./test.sh $scriptPath $inputPath
done