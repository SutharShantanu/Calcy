import React from "react";

const Key = ({ key_name, children, onClick }) => {
    const isIconKey =
        children &&
        children.props &&
        children.props.icon &&
        children.props.icon.iconName === "equals";

    let buttonClassName = "";
    if (isIconKey) {
        buttonClassName =
            "bg-sky-200 rounded-full py-5 m-1 text-2xl outline-sky-300 hover:shadow-lg transition-all duration-300 hover:bg-sky-400 hover:outline-offset-2 hover:outline";
    } else if (key_name === "AC") {
        buttonClassName =
            "bg-emerald-100 rounded-full py-5 m-1 text-2xl outline-emerald-200 hover:shadow-lg transition-all duration-300 hover:bg-emerald-200 hover:outline-offset-2 hover:outline";
    } else if (children && children.props.icon.iconName === "delete-left") {
        buttonClassName =
            "bg-red-100 rounded-full py-5 m-1 text-2xl outline-red-200 hover:shadow-lg transition-all duration-300 hover:bg-red-200 hover:outline-offset-2 hover:outline";
    } else {
        buttonClassName =
            "bg-slate-200 rounded-full py-5 m-1 text-2xl outline-slate-300 hover:shadow-lg transition-all duration-300 hover:bg-slate-400 hover:outline-offset-2 hover:outline";
    }

    return (
        <button className={buttonClassName} onClick={onClick}>
            {children || key_name}
        </button>
    );
};

export default Key;
