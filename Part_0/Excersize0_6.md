```mermaid 
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  note right of browser: Note is added to the list and the html is redrawn
  server-->>browser: confirmation of receive