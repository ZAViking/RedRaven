<template>
    <AppHeader />
    <Navbar />
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
    </div>
</template>

<style lang="css">
    input[type="text"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    input[type="password"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    button {
        background-color: #ffffff;
        color: #ffffff;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
    }
    button:hover {
        opacity: 0.8;
    }
    .container {
        padding: 16px;
    }
    .container {
        padding: 16px;
    }
    span.psw {
        float: right;
        padding-top: 16px;
    }
    /* Change styles for span and cancel button on extra small screens */

    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
        .cancelbtn {
            width: 100%;
        }
    }
    
</style>