import React from 'react'
import {MdMessage} from "react-icons/md"
import styles from "./Button.module.css"

function Button(props) {
    const {isOutline,text,icon}=props;
    return (
        <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
         {props.icon}   
        {props.text}
        
     

        </button>
    )
}

export default Button
