import React from 'react';


function UserList() {
    const user = [
        {
            id: 1,
            username: 'veloport',
            email: 'public.veloport@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
    return(
        <div>
            <div>
                <b>{user[0].username}</b> <span>({user[0].email})</span>
            </div>
            <div>
                <b>{user[1].username}</b> <span>({user[1].email})</span>
            </div>
            <div>
                <b>{user[2].username}</b> <span>({user[2].email})</span>
            </div>
        </div>
    )
}