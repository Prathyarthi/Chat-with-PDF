"use client"

import { CircleArrowDown, RocketIcon } from 'lucide-react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileUploader() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })

    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            <div {...getRootProps()} className={`border-2 border-dashed p-10 mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}>
                <input {...getInputProps()} />
                <div className='flex flex-col items-center justify-center'>
                    {
                        isDragActive ? (
                            <>
                                <RocketIcon className="w-16 h-16 animate-ping" />
                                <p>Drop the files here ...</p>
                            </>
                        ) : (
                            <>
                                <CircleArrowDown className="w-16 h-16 animate-bounce" />
                                <p>Drag n drop some files here, or click to select files</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FileUploader