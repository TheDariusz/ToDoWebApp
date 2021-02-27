const apiKey = "39b54809-45e0-4765-9b10-b7564386f2be";
const apihost = 'https://todo-api.coderslab.pl';

const apiListTasks = async () => {
    let response = await fetch(apihost + '/api/tasks', {
        headers: {
            'Authorization': apiKey
        }
    })
    if (!response.ok) {
        alert("data fetching error!");
    }
    return response.json()
}

const apiCreateTask = async (title, description) => {
    let response = await fetch(
        apihost + '/api/tasks',
        {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description, status: 'open'})
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiDeleteTask = async taskId => {
    let response = await fetch(
        apihost + '/api/tasks/' + taskId ,
        {
            method: 'DELETE',
            headers: {
                'Authorization': apiKey,
            }
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiListOperationsForTask = async taskId => {
    let response = await fetch(apihost + '/api/tasks/' + taskId + '/operations', {
        headers: {
            'Authorization': apiKey
        }
    })
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiCreateOperationForTask = async (taskId, description) => {
    let response = await fetch(
        apihost + '/api/tasks/' + taskId + '/operations',
        {
            method: 'POST',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: description, timeSpent: 0})
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiUpdateOperation = async (taskId, description, timeSpent) => {
    let response = await fetch(
        apihost + '/api/tasks/' + taskId + '/operations',
        {
            method: 'PUT',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: description, timeSpent: timeSpent})
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiDeleteOperation = async operationId => {
    let response = await fetch(
        apihost + '/api/operations/' + operationId ,
        {
            method: 'DELETE',
            headers: {
                'Authorization': apiKey,
            }
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

const apiUpdateTask = async (taskId, title, description, status) => {
    let response = await fetch(
        apihost + '/api/tasks/' + taskId,
        {
            method: 'PUT',
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description, status: status})
        }
    )
    if (!response.ok) {
        alert('Wystąpił błąd! Otwórz devtools i zakładkę Sieć/Network, i poszukaj przyczyny');
    }
    return response.json();
}

// console.log(apiDeleteTask('2159cadb-4d18-4e53-953f-03e84a6bed61'));
// console.log(apiCreateTask("thedariusz_test", "test of add task api"));
console.log(apiListTasks());
// apiCreateOperationForTask('f16ec17f-95af-48bd-b0eb-a4f2c83f2fea', "test of add operation")
// apiDeleteOperation('6d6e9f58-7ff5-4ba8-be9c-4f4bca852773')
// console.log(apiListOperationsForTask('f16ec17f-95af-48bd-b0eb-a4f2c83f2fea'));