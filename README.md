# Kwitter — Room Interface Exercise

An early chat-room interface exercise using Firebase.

**Repository created:** 2021-09-19  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2021-09-19

## Features and implementation

- Username entry and localStorage.
- Room page.
- Firebase initialization and room-list listener.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, Firebase.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`kwitter.js`](kwitter.js) | Username and page navigation |
| [`kwitter_room.html`](kwitter_room.html) | Room interface |
| [`kwitter_room.js`](kwitter_room.js) | Room and database logic |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `kwitter.js`: `addUser()`.
- `kwitter_room.js`: `getData()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/Kwitter_HW.git
cd Kwitter_HW
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Enter a test username using a separately configured test Firebase project.

Before testing, review Firebase configuration and security rules and use an isolated project that you control. Do not connect to a production database or enter sensitive information.

Use a Firebase project you own or are authorized to access before testing any database writes. Configure appropriate database security rules; the username input alone is not authentication.

## Current status and limitations

Room creation, navigation and messaging are not fully implemented.

## Related project snapshots

Other repositories in this project family:
- [Kwitter](https://github.com/Avenger-Sonic123/Kwitter) — repository created 2021-10-11
- [kwitter2.0](https://github.com/Avenger-Sonic123/kwitter2.0) — repository created 2021-10-11
- [Kwitter_app_unfinished](https://github.com/Avenger-Sonic123/Kwitter_app_unfinished) — repository created 2021-10-11

---

Source reference: [`dec05103`](https://github.com/Avenger-Sonic123/Kwitter_HW/tree/dec05103b7ea1c1af271793a42923435c660b40b) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
