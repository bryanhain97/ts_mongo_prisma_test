import { Dispatch, SetStateAction, useEffect, useState } from 'react'


const useFormattedDate = (date: Date): [string | null, Dispatch<SetStateAction<string | null>>] => {
    const [formattedDate, setFormattedDate] = useState<string | null>(null)
    useEffect(() => {
        const newFormattedDate = new Date(date).toLocaleDateString();
        setFormattedDate(newFormattedDate)
    }, [date])

    return [formattedDate, setFormattedDate]
}

export default useFormattedDate;