import React, {useEffect, useState} from "react";
import './List.css';
import ListItem from "./ListItem";
import NewItem from "./NewItem";
import {queryAllByAttribute, queryByText} from "@testing-library/react";

const List = () => {
    {/*task 1*/}
    const [text, setText] = useState('Здесь будет отображаться ваш текст');

    const paragraphText = () => {
        const newText =
            setText((text) => document.getElementById('num1').value);
    }


    {/*task 2*/}
    const [char, setChar] = useState('0');

    const numOfCharacters = () => {
        const numChar =
            setChar((char) => alert(document.getElementById('num2').value.length))
    };

    {/*task 3*/}
    const [sum, setSum] = useState('0');

    const sumNum = () => {
        const a = document.getElementById('num3first').value;
        const b = document.getElementById('num3second').value;
        const newSum =
            setSum((sum) => alert(sum = Number(a) + Number(b)));
    }

    {/*task 4*/}
    const [tasks, setTasks] = useState(['item1', 'item2', 'item3']);

    const addNewItemEnd = () => {
        const textNewItem = document.getElementById('num4').value;
        setTasks((tasks) => [...tasks, textNewItem]);
    }

    {/*task 5*/}
    const deleteNumber = () => {
        const delNum = document.getElementById('num4').value;
        tasks.splice(delNum+1,1)
        setTasks((tasks) => [...tasks]);
    }

    {/*task 6*/}
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    /*Состояния, отражающие, были ли мы внутри input или нет*/
    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);

    /*Ошибки*/
    const [loginError, setLoginError] = useState('Login не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    /*проверка перед нажатием на регистрацию*/
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (loginError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError]);

    /*event, когда пользователь пытается что-то ввести*/
    const loginHandler = (e) => {
        setLogin(e.target.value)
        const re = /^[a-zA-Z\-]+$/;
        if(!re.test(String(e.target.value))) {
            setLoginError('Некорректный login')
        } else {
            setLoginError('')
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
            if(!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else
            setPasswordError('')
    }

    /*event, когда пользователь покинул поле ввода*/
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true);
                break;
            case  'password':
                setPasswordDirty(true);
                break;
        }
    }

    const recordingValues = () => {
        alert(`Регистрация прошла успешно! логин ${login}, пароль ${password}`);
    }

/*    НЕ получается !!!:(*/
    const authorization = (e) => {
        switch (e.target.name) {
            case 'login':
                if (e.target.value===login) {
                    alert('login введен верно')
                }
                break
            case  'password':
                if (e.target.value===password) {
                    alert('password введен верно')
                }
                break;
            default:
                alert(`Ошибка`)
        }
    }


    {/*task 7*/}
    const checkBox = () => {
        const div = document.getElementById('square');
        if (document.getElementById('checkbox').checked) {
            div.style.display = 'none'
        } else {
            div.style.display = 'block';

        }
    };

    {/*task 8*/}
    const sizeText = () => {
        const text8 = document.getElementById('num8');
        switch (document.getElementById('select').value) {
            case '8px':
                text8.style.fontSize = '8px';
                break;
            case '16px':
                text8.style.fontSize = '16px';
                break;
            case '24px':
                text8.style.fontSize = '24px';
                break;
            case '32px':
                text8.style.fontSize = '32px';
                break;

        }
    }
    {/*task 9*/}
    const [options, setOptions] = useState(['1','2','3']);
    const newOption = () => {
        const text9 = document.getElementById('num9').value;
        setOptions((options) => [...options, text9]);
    }

    return (
        <div>
            <div className='name'>Задание 1</div>
            <textarea placeholder='Введите текст' id="num1" onKeyUp={paragraphText}/>
            <p>{text}</p>

            <div className='name'>Задание 2</div>
            <input id="num2" />
            <br/>
            <button onClick={numOfCharacters}>Сколько символов я ввел?</button>

            <div className='name'>Задание 3</div>
            <input id='num3first' type='number'/>
            <br/>
            <input id='num3second' type='number'/>
            <br/>
            <button onClick={sumNum}>Сумма введенных значений</button>

            <div className='name'>Задание 4 и 5</div>
            <form>
                <input id='num4'/>
                <button type='submit' onClick={addNewItemEnd}>добавить в конец</button>
            </form>

            <form>
                <input id='num5' type='number'/>
                <button onClick={deleteNumber}>удалить указанный номер</button>
            </form>

                <ol className='list'>
                    {tasks.map((item,index) => {
                        return <ListItem key={index} text={item}/>
                    })}
                </ol>

            <div className='name'>Задание 6</div>
            <form>
                {(loginDirty && loginError) && <div style={{color: 'red'}}>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} type='text' name='login' placeholder='Введите свой email...'/>

                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name='password' placeholder='Введите свой пароль...'/>

                <button disabled={!formValid} type='submit' onClick={recordingValues}>регистрация</button>
                <button disabled={!formValid} type='submit' onClick={e => authorization(e)}>авторизация</button>
            </form>

            <div className='name'>Задание 7</div>
            <input type='checkbox' id='checkbox' onChange={checkBox}/>
            <div id='square'/>

            <div className='name'>Задание 8</div>
            <div id='num8'>Текст</div>
            <select onChange={sizeText} id='select'>
                <option value="8px">8px</option>
                <option value="16px" selected>16px</option>
                <option value="24px">24px</option>
                <option value="32px">32px</option>
            </select>


            <div className='name'>Задание 9</div>
                <input type='text' id='num9'/>
                <button onClick={newOption}>добавить новый option</button>
                <select>
                    {options.map((item, index) => {
                        return <NewItem key={index} text={item}/>
                    })}
                </select>

        </div>

    )

}

export default List;