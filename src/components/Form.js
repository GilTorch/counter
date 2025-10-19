import { useState } from "react"

export default function Form(){

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({...form, value: e.target.value});
    }

    return <form>
        <input type="text" value={form.value} onChange={handleChange} />
    </form>
}