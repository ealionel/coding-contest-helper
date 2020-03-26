# Program output tester for coding contests

This script can be used to check if your answer to a coding contest is correct by testing your program with a set of input mapped with its set of output.
It watches your file saves with [`inotifywait`](https://linux.die.net/man/1/inotifywait) so make sure you have the tool installed on your Linux machine.

## Usage

```
./test.sh <START_PROGRAM_CMD> <INPUT_OUTPUT_FOLDER/>
```

*INTPUT_OUT_FOLDER* a folder containing files with following format : `input<NUMBER>.txt` and `output<NUMBER>.txt`

For example if you're using **Node.js**, your submission script is `answer.js` and the test samples are in `tests_files/` :

```
./test.sh "node sub.js" tests_files
```

### Watcher

You can use `watcher.sh` to watch your file and execute `test.sh` automatically on script save.

```
./watcher.sh <file_to_watch> <start_program_cmd> <input_output_folder>
```

So for example

```
./watcher.sh sub.js "node sub.js" tests
```

![Visual example](https://i.imgur.com/Mopj1zE.png)