# NoteBaseSite

## Description
The Frontend of my notes organizer application.

## Requirements
- Have Docker installed.
- have the [NoteBaseAPI](https://github.com/NoteBaseApp/NoteBaseAPI/tree/main) project running.
## Project Startup

### Setup Docker container
Setup the Docker container with the following command, remember to change parameters where necessary:
```cmd
$ docker run --name NoteBaseSite --hostname NoteBaseSite -e "BACKEND_URL=" -p {port}:80 -d joeyremmers/notebaseSite
```
