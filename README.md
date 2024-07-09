# NoteBaseSite

## Description
The Frontend of my notes organizer application.

## Requirements
- Have Docker installed.
- have the [NoteBaseAPI](https://github.com/NoteBaseApp/NoteBaseAPI/tree/main) project running.
## Project Startup

### Setup Docker container
Setup the Docker container with the following command, remember to replace all {parameters}:
```cmd
$ docker run --name NoteBaseSite --hostname NoteBaseSite -e "VITE_API_URL={ip}:{port}" -e "GOOGLE_CLIENT_ID={your google cloud cridential client id}" -e "GOOGLE_CLIENT_SECRET={your google cloud cridential client secret}" -e "AUTH_SECRET={an secret phrase with a length of 32 characters}" -p {port}:80 -d joeyremmers/notebaseSite
```
