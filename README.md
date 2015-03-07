# Venn Email

## Install
```
npm install venn-email
```

## Example
```
EmailClient = require("venn-email");
emailClient = new EmailClient();
emailClient.setFrom("from@email.com");
emailClient.configureSendgrid("venn-email", "Password123", 3);
emailClient.configureMandrill("aNdLxLa4xFG4JR-wpeMklw", 2);

emailClient.send("timmyg13@gmail.com", "subj", "msg", function(err, result){
	console.info("done");
});
```


## API

#### Initializing
###### setFrom(email)
|params         | type   |    description                | example          |
|---------------| ----   |   --------------------------- | ------------     |
|email          | String |    default from email address | bob@email.com    |

###### configureSendgrid(api_user, api_key, priority)
|params         | type   |    description       | example          |
|---------------| ----   |   --------------------------- | ------------     |
|api_user       | String |   sendgrid user id   | "venn-email"     |
|api_key        | String |   sendgrid password  | "Password123"    |
|priority       | Number |   service priority   | 2                |

###### configureMandrill(api_key, priority)
|params         | type   |    description      | example                    |
|---------------| ----   |   --------------------------- | ------------     |
|api_key        | String |   mandrill api key  | "aNdLxLa4xFG4JR-wpeMklw"   |
|priority       | Number |   service priority  | 1                          |

#### Use
###### send(api_key, priority)
|params         | type   |    description      | example                    |
|---------------| ----   |   --------------------------- | ------------     |
|to             | String |   to email address      | "to@email.com"          |
|subject        | String |   email subject         | Subject 123             |
|message        | String |   email message         | Hey yo what up          |



