import './CourseCard.css'
import {BsTrash} from 'react-icons/bs'
import { useDispatch } from 'react-redux/es/exports'
import { useState } from 'react'

export const CourseCard = ({ data }) => {
    const dispatch = useDispatch()

    const removeCourse = (id) => {
        dispatch({
            type:"DELETE_COURSE",
            payload:id
        })
    }
    return(
        <div className="course-card">
            <div className="course-header">
                    <p className="course-name">{ data.cTitle }</p>
                    <p className="create-date">Created on : { data.fullDate }</p>
            </div>
            <div className="course-info">
                <div className="center">
                    <div className="left">
                        <p className="course-creater">Faculty : <span>{ data.cfName }</span> </p>
                        <p className="course-creater">Description : <span>{ data.cDescription }</span></p>
                    </div>
                    <div className="right">
                         <BsTrash id='trach-icon' onClick={() => {removeCourse(data.id)}}/>
                    </div>
                </div>
                    <div className="course-footer">
                        <div className="c-start">Starting on : { data.csDate }</div>
                        <div className="c-end">End on : { data.ceDate }</div>
                    </div>
            </div>
        </div>
    )
}