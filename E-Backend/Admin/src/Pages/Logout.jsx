import React from 'react'

const Logout = () => {
    const Logout = ()=>{
        window.localStorage.clear()
        alert("Logout Account")
        window.location.href = '/adminlogin'
    }
  return (
    <div>

        <h1>Logout</h1>
    
    <div className="MainAdminContainer">

    <div className="AdminBox">
        <div className="AdminContainer">
            <div className="AdminInput-field">
                <input type="button" className="AdminSubmit" style={{marginLeft:"80px"}} value="Logout" onClick={() => Logout()} id="" />
            </div>
            
        </div>
    </div>
</div>
</div>
  )
}

export default Logout
