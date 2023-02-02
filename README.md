

| Action | URL | HTTP Verb | JSX Filename | Mongoose Method|
|--------|-----|-----------|--------------|----------------|
| Index  | /logs| GET | Index.jsx| Log.find()|
| New | /logs/new | GET | New.jsx | none |
| Destroy | /logs/:id | DELETE | none | Log.delete()|
| Update | /logs/:id | PUT | none | Log.findByIdAndUpdate() |
| Create | /logs | POST | none | Log.create() |
| Edit | /logs/:id/edit | GET | Edit.jsx | Log.findById() |
| Show | /logs/:id | GET | Show.jsx | Log.findById() |