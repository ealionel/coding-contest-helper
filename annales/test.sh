#!/bin/bash

script=$1
inputFolder=$2

inputList=$(ls $inputFolder/input*[0-9].txt)
outputList=($(ls $inputFolder/output*[0-9].txt))


getTime() {
    echo $(($(date +%s%N)/1000000))
}

setGreen() {
    echo -en "\e[32m"
}

setDefaultColor() {
    echo -en "\e[39m"
}

setRed() {
    echo -en "\e[31m"
}


TMP_OUTPUT_PATH="tmp/tmp_output"

counter=1
mkdir -p tmp
for inputFile in $inputList
do

    outputPath=tmp/output${counter}.txt

    START_TIME=$(getTime)
    node $script < $inputFile > $outputPath
    END_TIME=$(getTime)

    timeElapsed=$(($END_TIME - $START_TIME))

    sed -e '$a\'  ${outputList[$((counter - 1))]} > $TMP_OUTPUT_PATH
    if [ -z "$(diff $TMP_OUTPUT_PATH $outputPath)" ]
    then
        setGreen
        echo -e "✓ Test #$counter (${timeElapsed} ms) "
        setDefaultColor
    else
        setRed
        echo "✗ Test #$counter"
        setDefaultColor
        echo -e "\tYOU:\t\t$(cat $outputPath)"
        echo -e "\tEXPECTED:\t$(cat $TMP_OUTPUT_PATH)"
        # echo -e "\tYOURS\tEXPECTED"
        # echo -e "\t$(cat $outputPath)\t $(cat $TMP_OUTPUT_PATH)"
    fi

    counter=$((counter+1))
done

rm $TMP_OUTPUT_PATH