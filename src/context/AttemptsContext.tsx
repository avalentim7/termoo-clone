import React, { createContext, useState } from 'react';

interface AttemptsContextProps {
    attempt: number;
    selectedPosition: number;
    wordAttempts: object;
    handleSubmitAttempt: (attempt: number) => void;
    handleChangeKeyPosition: (position: number) => void;
    handleChangeWordAttempts: (position: number, attempt: number, letter: string) => void;
}

export const AttemptsContext = createContext({} as AttemptsContextProps);

export const AttemptsProvider = ({ children }) => {
    const [attempt, setAttempt] = useState<number>(1);
    const [selectedPosition, setSelectedPosition] = useState<number>(1);
    const [wordAttempts, setWordAttempts] = useState({
        1: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "progress" },
        2: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "" },
        3: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "" },
        4: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "" },
        5: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "" },
        6: { 1: "", 2: "", 3: "", 4: "", 5: "", status: "" },
    });

    const handleSubmitAttempt = (attempt: number) => {
        const hasNullEntry = Object.values(wordAttempts[attempt]).filter(wordAttempt => wordAttempt === '');
        if (hasNullEntry.length !== 0) return;

        const newAttempt = attempt <= 6 ? attempt + 1 : attempt;
        setAttempt(newAttempt);
        setSelectedPosition(1);

        const newStatusAttempt = {
            ...wordAttempts,
            [attempt]: {
                ...wordAttempts[attempt],
                status: "finished",
            },
            [attempt + 1]: {
                ...wordAttempts[attempt + 1],
                status: "progress"
            }

        }

        setWordAttempts(newStatusAttempt);
    }

    const handleChangeKeyPosition = (position: number) => {
        setSelectedPosition(position)
    }

    const handleChangeWordAttempts = (position: number, attempt: number, letter: string) => {
        const newWord = {
            ...wordAttempts,
            [attempt]: {
                ...wordAttempts[attempt],
                [position]: letter
            }
        }

        console.log(newWord);

        setWordAttempts(newWord)

        if (letter !== '') {
            setSelectedPosition(selectedPosition >= 5 ? 1 : selectedPosition + 1);
        } else {
            setSelectedPosition(selectedPosition <= 1 ? 5 : selectedPosition - 1);
        }
    }

    return (
        <AttemptsContext.Provider
            value={{
                attempt,
                selectedPosition,
                wordAttempts,
                handleSubmitAttempt,
                handleChangeKeyPosition,
                handleChangeWordAttempts
            }}
        >
            {children}
        </AttemptsContext.Provider>
    )
}