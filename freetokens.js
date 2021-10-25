var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '    def __init__(self, u):
        self.tokens = u[\'tokens\']
        self.name = u[\'name\']
        self.id = u[\'_id\']


def login(method, username, password):
    if method == \'google\':
        return \'not supported yet\', None
    else:
        response = requests.post(\'https://api.blooket.com/api/users/login\', json={
            \'name\': username,
            \'password\': password
        }, headers=headers).json()

        if response[\'success\']:
            return response[\'token\'], User(response[\'user\'])
        else:
            return response, None


# success, blook | error, new?
def open_box(box):
    response = requests.put(\'https://api.blooket.com/api/users/unlockblook\', json={
        \'box\': box,
        \'name\': user.name
    }, headers=headers)'

document.write(pagecode);

</script>
