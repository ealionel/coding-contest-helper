file_to_watch=$1
cmd=$2
inputPath=$3

setGreen() {
    echo -en "\e[32m"
}

setDefaultColor() {
    echo -en "\e[39m"
}

setRed() {
    echo -en "\e[31m"
}

setGreen
echo "Watching on ${file_to_watch}"
setDefaultColor

while :
do
    inotifywait -e modify ${file_to_watch} && ./test.sh "${cmd}" ${inputPath}
done