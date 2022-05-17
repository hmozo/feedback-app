import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

export default function Post(){
    const navigate= useNavigate()

    const status=200
    if (status==404){
        return <Navigate to='/notfound' />
    }

    const onClick= ()=>{
        navigate('/about')
    }

    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick} >click</button>
            <Routes>
                <Route path="'/show" element={<h1>Hello show</h1>} />
            </Routes>
        </div>
    )
}