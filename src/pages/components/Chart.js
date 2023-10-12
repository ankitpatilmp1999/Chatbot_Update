import React, { useState, useEffect } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Button, Popover, Input } from 'antd';
import Draw from './Drawer';
function RecursiveTreeNode({ level, label, text, botId, FetchData }) {
    const [children, setChildren] = useState([]);
    const [open, setOpen] = useState(false);
    const [openDrawer, setopenDrawer] = useState(false);
    const [title, setTitle] = useState(""); //bots title state
    const [nodeText, setNodeText] = useState("");


    const showDrawer = () => {
        if (label === 'Bot Response') {
            setopenDrawer(false)
        }
        else {
            setopenDrawer(true)
        }
    }


    const handleAddTitle = async () => {

        const credentials = { id: botId, text: title };
        const response = await fetch("http://192.168.29.140:3005/api/chatbot/text2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })

        const responseJson = await response.json();
        console.log(responseJson);
        setOpen(false)
        setopenDrawer(false)
        setTitle("")
        setNodeText(title)
        FetchData()
    };



    const handleAddChild = (newLabel) => {
        if (newLabel === 'User Input') {
            label = 'User Input';
        } else if (newLabel === 'A') {
            label = 'A';
        } else if (newLabel === 'B') {
            label = 'B';
        } else if (newLabel === 'C') {
            label = 'C';
        } else if (newLabel === 'D') {
            label = 'D';
        } else if (newLabel === 'Bot Response') {
            label = 'Bot Response';
        } else if (newLabel === 'Add Child') {
            label = '';
        }
        const newChild = { label, children: [] };
        setChildren([...children, newChild]);
        setOpen(false);
    };

    return (
        <>
            <TreeNode label={
                <Popover
                    content={
                        <div className="flex flex-col">
                            <Button type="text" onClick={() => handleAddChild('User Input')}>User Input</Button>
                            <Button type="text" onClick={() => handleAddChild('A')}>A</Button>
                            <Button type="text" onClick={() => handleAddChild('B')}>B</Button>
                            <Button type="text" onClick={() => handleAddChild('C')}>C</Button>
                            <Button type="text" onClick={() => handleAddChild('D')}>D</Button>
                            <Button type="text" onClick={() => handleAddChild('Bot Response')}>Bot Response</Button>
                        </div>
                    }
                    trigger="click"

                    visible={open && label !== 'Bot Response'}
                    onVisibleChange={(newOpen) => {
                        if (label !== 'Bot Response') {
                            setOpen(newOpen);
                        }
                    }}
                >
                    {label ? (
                        <>
                            {nodeText}
                            <Button className='ml-6' onClick={showDrawer}>{label}</Button>
                            {label === 'Bot Response' ? ("") : (<button className='bg-[gray]  h-[25px] w-[25px] text-[white] rounded-full'>+</button>)} 
                        </>
                    ) : (
                        <>
                                {text}
                                <button onClick={showDrawer} className="border border-gray-400 rounded-[6px] rotate transform rotate-45 bg-[#b1abab] ml-6">
                                <img src="\images\chatbot.png" className="rotate transform -rotate-45" />
                            </button>
                                <button className='bg-[gray] h-[25px] w-[25px] text-[white] rounded-full'>+</button> 
                        </>)}
                </Popover>
            }>

                {children.map((child, index) => (
                    <RecursiveTreeNode key={index} level={level + 1} label={child.label} />
                ))}

            </TreeNode>

            <Draw
                openDrawer={openDrawer}
                setopenDrawer={setopenDrawer}
                handleAddTitle={handleAddTitle}
                title={title}
                setTitle={setTitle}
                botId={botId}
            />
        </>
    );
}

const Chart = ({ id }) => {
    const [rootChildren, setRootChildren] = useState([]);

    // Add Bot
    const [name, setName] = useState("bot");
    const [isPublish, setisPublish] = useState("false");
    const [isDeleted, setisDeleted] = useState("false");
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            await FetchData();
        })();
    }, []);
    const FetchData = async () => {
        const response = await fetch("http://192.168.29.140:3005/api/vendor/" + id)
        const responseJson = await response.json();
        setData(responseJson.chatbot)

    }


    const handleSubmit = async () => {

        const credentials = { name, createdById: id, isPublish, isDeleted };
        const response = await fetch("http://192.168.29.140:3005/api/chatBot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })

        const responseJson = await response.json();
        if (responseJson) {
            await FetchData()
        }
    };
    // Add Bot

    const handleAddRootChild = () => {
        const newRootChild = { label: 'Root', children: [] };
        setRootChildren([...rootChildren, newRootChild]);
        handleSubmit();
    };

    return (

        <Tree label={<button onClick={handleAddRootChild} className="bg-gray-500 w-[120px] h-[35px] rounded-3xl  mt-4 ml-2 text-white hover:button">Start</button>}>

            {data?.map((item, index) => (
                <>
                    <RecursiveTreeNode key={index} level={0} text={item.text} botId={item.id} FetchData={FetchData} />
                </>
            ))}
        </Tree>
    );
};

export default Chart;

