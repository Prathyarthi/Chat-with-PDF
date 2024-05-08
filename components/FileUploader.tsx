"use client"

import useUpload from '@/app/hooks/useUpload'
import { CircleArrowDown, RocketIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

function FileUploader() {

    const { progress, status, fileId, handleUpload } = useUpload()
    const router = useRouter()

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`)
        }
    }, [fileId, router])

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0]

        if (file) {
            await handleUpload(file)
        }
        else {

        }
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
        }
    })

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