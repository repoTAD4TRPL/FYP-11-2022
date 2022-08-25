# DOCUMENTATION REST API REGISTRATION

### API ENDPOINT
```ruby
https://register.ulin-app.xyz/
```

| Action           | Url           | Parameter        | Method | return  | Payload   |
| ---------------- | ------------- | ---------------- | -----  | -------- | -------- |
| Find Participant By Id and Id seminar  | /v1/participant/:id_participant/seminar/:id_seminar | Id Participant | `GET` | Detail Participant |
| Save Participant register | /v1/register  | -- | `POST` | message succeffully saved | `"id_participant"` and `"id_seminar"` and `"ticket_type"` |
| Update / Checkin Participant | /v1/participant/:id_participant/seminar/:id_seminar | Id participant | `PATCH` | message update / check-im successfully |
| Update merch | /v1/merch/:id_participant | id participant | `PATCH` | Message Successfully |
| Find All Participants | /v1/participants | -- | `GET` | List all participants |
| Delete All Participants | /v1/participants | -- | `DELETE` | Message Sucessfully |
