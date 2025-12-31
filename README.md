# Task CLI --- Simple Task Manager

[Project URL](https://roadmap.sh/projects/task-tracker)

A lightweight command-line task manager built with Node.js (no external
libraries).

Manage your tasks directly from the terminal --- add, update, delete,
list, and track progress.

------------------------------------------------------------------------

## ✨ Features

-   Add tasks
-   Update task descriptions
-   Delete tasks
-   Mark tasks as **todo**, **in-progress**, or **done**
-   List tasks by status or view all
-   Simple file-based storage

------------------------------------------------------------------------

## ⚙️ Installation

Clone the project:

``` bash
git clone https://github.com/eva003n/Node-projects.git
```

Link the CLI globally (so you can run `task-cli` anywhere):

``` bash
pnpm link
```


> If PNPM complains about a bin folder, run:
>
> ``` bash
> pnpm setup
> ```

Confirm setup was successfull, will output absolute path to directory

```bash
pnpm bin -g
```
------------------------------------------------------------------------

## 🚀 Usage
### Intialize task-cli
This command should be run before any other commands
```bash
task-cli init
```

### Show help

Displays all available commands:

``` bash
task-cli help
```

or simply:

``` bash
task-cli
```

------------------------------------------------------------------------

### Add a new task

``` bash
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

------------------------------------------------------------------------

### Update a task

``` bash
task-cli update 1 "Buy groceries and cook dinner"
```

------------------------------------------------------------------------

### Delete a task

``` bash
task-cli delete 1
```

------------------------------------------------------------------------

### Mark task as in-progress

``` bash
task-cli mark-in-progress 1
```

------------------------------------------------------------------------

### Mark task as done

``` bash
task-cli mark-done 1
```

------------------------------------------------------------------------

### List all tasks

``` bash
task-cli list
```

------------------------------------------------------------------------

### List tasks by status

``` bash
task-cli list todo
task-cli list in-progress
task-cli list done
```

------------------------------------------------------------------------

## 💡 Tips

-   Always wrap task descriptions in quotes if they contain spaces.
-   Task IDs are created automatically.
-   If something doesn't work, run:

``` bash
task-cli help
```
