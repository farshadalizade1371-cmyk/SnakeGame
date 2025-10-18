let currentPlayer = 1;
let player1Position = 0;
let player2Position = 0;
let diceResult = 0;
let gameOver = false;
let isMoving = false;

document.getElementById('roll-dice').addEventListener('click', rollDice);
document.getElementById('move-player').addEventListener('click', manualMove);

function rollDice() {
    if (gameOver) {
        alert('بازی تمام شده است!');
        return;
    }

    if (isMoving) {
        return;
    }

    const rollSound = document.getElementById('roll-sound');
    rollSound.play();

    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    const rollButton = document.getElementById('roll-dice');
    rollButton.classList.add('shake');

    setTimeout(() => {
        rollButton.classList.remove('shake');
    }, 300);

    diceResult = Math.floor(Math.random() * 6) + 1;
    const currentPlayerName = currentPlayer === 1 ? 'بازیکن 1' : 'بازیکن 2';
    document.getElementById('dice-result').innerText = `عدد تاس: ${diceResult} \n ${currentPlayerName}`;

    let currentPlayerPosition = currentPlayer === 1 ? player1Position : player2Position;
    const newPlayerPosition = movePlayer(currentPlayerPosition);

    animateMovement(currentPlayer, currentPlayerPosition, newPlayerPosition);
}

function movePlayer(playerPosition) {
    if (playerPosition === 0) {
        if (diceResult === 6) {
            playerPosition = 1;
        } else {
            return playerPosition;
        }
    }

    if (playerPosition === 1 && diceResult === 6) {
        return playerPosition;
    }

    if (playerPosition === 99 && diceResult !== 1) {
        showToast(`دوباره تلاش کن`);
    } else if (playerPosition + diceResult > 100) {
        showToast(`دوباره تلاش کن`);
    } else {
        playerPosition += diceResult;
        if (playerPosition > 100) {
            playerPosition = 100;
        }
        return playerPosition;
    }
    return playerPosition;
}


function animateMovement(player, startPosition, endPosition, fast = false) {
    isMoving = true;
    const playerElement = document.getElementById(`player-${player}`);
    const pieceElement = playerElement.querySelector('.piece');

    let currentStep = startPosition;
    const intervalDuration = (startPosition === 4) ? 60 : (fast ? 80 : 300);
    const interval = setInterval(() => {
        if (currentStep < endPosition) {
            currentStep++;
            updatePlayerPosition(player, currentStep);
        } else if (currentStep > endPosition) {
            currentStep--;
            updatePlayerPosition(player, currentStep);
        } else {
            clearInterval(interval);
            if (player === 1) {
                player1Position = endPosition;
            } else {
                player2Position = endPosition;
            }

            handlePostMoveActions(player, endPosition);
        }
    }, intervalDuration);
}

function handlePostMoveActions(player, position) {
    if (position === 5) {
        playSound('message.mp3', () => {
            const messages = ['صدای گربه در بیار🐈', 'هر جاتو بگی باید بخوره😋', 'برای شروع ببوسش💋'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
    }
    
    if (position === 18) {
        playSound('message.mp3', () => {
            const messages = ['هر جاشو خواستی ماساژ بده😁', 'کل گردنشو لیس بزن👅', 'دست عشقتو ببوس✋🏼'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
        return;
    }
    
    if (position === 35) {
    playSound('message.mp3', () => {
        const messages = ['موهاشو 30 ثانیه نوازش کنی💆🏻‍♀', 'ممه عشقتو 1 دقیقه بمال🍒', 'هر کاری ازت خواست انجام بده💀', 'هرجاش دوس داری کاکائو بریز بخور🍫'];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        isMoving = false;
    });
    return;
}

    
    if (position === 48) {
        playSound('message.mp3', () => {
            const messages = ['لاله گوششو بخور🫠', 'یه گاز محکم از هر جاش ک دوس داری🦞', 'چشماشو ببند و سی ثانیه هر کاری خواستی باش بکن😎'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
        return;
    }
    
    if (position === 63) {
        playSound('message.mp3', () => {
            const messages = ['محکم بغلش کن🫂', 'قمبل کن اسپنک بخوری👋🏼', 'دستتو بکن داخل شورتش ۳۰ ثانیه براش بمال👙'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
        return;
    }
    
    if (position === 79) {
        playSound('message.mp3', () => {
            const messages = ['رو باسن عشقت نقاشی بکش🧑🏼‍🎨', '30 ثانیه لبای عشقتو بخور🫦', 'طرف مقابل رو آرایش کن💄'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
        return;
    }
    
    if (position === 88) {
        playSound('message.mp3', () => {
            const messages = ['اونجاشو محکم ببوس💋', 'هر کاری گفتی انجام بده😬', 'انگشتت عسل/یاهرچی برن بده میک بزنه👆'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            isMoving = false;
        });
        return;
    }
    
    if (position === 40) {
    const songs = ['Madrese.mp3', 'joni-jonom.mp3', 'Ghesmat-Namishe.mp3']; 
    const messages = [
        "ک مثل کپل ، صحرا شده پر ز گل\nگ مثل گردو ، بنگر به هر سو\nب مثل بهار ، فکر کن بسیار\nپ مثل پسته ، نباش خسته\nم مثل موش ، برخیز و بکوش\nخ مثل خونه ، نگیر بهونه\nآ مثل آغاز ، قصه شد آغاز",
        "جونی جونم بیا دردت به جونم\nشب مهتاب سی تو آواز میخونم\nجونی جونم یار جونم بیا دردت به جونم\nشب مهتاب لب دریا سی تو آواز میخونم",
        "قیسمت نمیشه اینگار\nدست تورا بگیرم\nبرای آخرین بار\nبرای تو بمیرم\nقیسمت نمیشه اینگار\nبرای تو بمیرم\nبرای آخرین بار\nدست تورا بگیرم\nگیریه نکن که اشکات\nبرای من یه درده\nتحمل غم تو\nمرا دیوانه کرده\nهیشکی مث من تورا دوس نداره\nاینو از تو چشام میتونی بخونی"
    ]; 

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    const messageElement = document.getElementById('message');
    messageElement.innerText = messages[randomIndex]; 
    messageElement.style.display = "block"; 

    
    playSound(randomSong, () => {
        
        setTimeout(() => {
            messageElement.style.display = "none";  
            currentPlayer = currentPlayer === 1 ? 2 : 1; 
            isMoving = false; 
        }, 2000); 
    });
    
    return;
}

    if (position === 71) {
    const songs = ['cheshmat-ghashange.mp3', 'Havar-Havar.mp3', 'Parmida.mp3']; 
    const messages = [
        "تو که چشمات خیلی قشنگه\nرنگ چشمات خیلی عجیبه\nتو که این همه نگاهت\nواسه چشمام گرمُ نجیبه\nمی دونستی همه ی آرزوهامو واسه ی چشم قشنگ تو پروندم، رفتش\nمی دونستی یا نه؟ می دونستی یا نه؟\nمی دونستی که جوونیمو واسه چشم عجیب تو سوزوندم، رفتش\nمی دونستی یا نه؟ می دونستی یا نه؟",
        "یارم میایه دلدارم میایه\nیارم میایه دلدارم میایه\nهوار هوار یا هوار یارم میایه\nهوار هوار یا هوار دلدارم میایه\nاین دل عزیزم ز دوریت بیزاره\nدل حسرت کِشم دیگه طاقت نداره\nیارم میایه دلدارم میایه\nیارم میایه دلدارم میایه",
        "تو منو دوس داری آره\nلبات گیرایی داره\nفدات بشم دوباره\nاین قلب من تازه کاره\nخارجکی بوس کن منو\nخودتو ملوس کن نرو\nبیا کنارم بشین و بعد\nدلو بلوتوث کن نرو\nآخ فدات بشم آرمیتا\nعلی شارمیتا نه پارمیدا\nپارمیدا یو بست لیدی\nولی می ره توی حس خیلی\nتو پیشی منی و میو\nپس عشوه نریز و بیا\nآره فدات می شم چون که بلایی تو\nبذار ببینم موهای طلاییتو\nبا تو دل من رسید به آرامش\nتو خوشگلی بی لوازم آرایش\nبا تو وجود من رفت تو اوج\nفدات می شم تو روزای فرد و زوج\nتو منو دوس داری آره\nلبات گیرایی داره\nفدات بشم دوباره\nاین قلب من تازه کاره\nوای وای وای پارمیدای من کوش؟\nوای وای وای می رم از هوش\nوای وای وای پارمیدای من کوش؟\nوای وای وای می رم از هوش\nپارمیدا، کجایی پس؟"
    ]; 

    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    const messageElement = document.getElementById('message');
    messageElement.innerText = messages[randomIndex]; 
    messageElement.style.display = "block"; 

    
    playSound(randomSong, () => {
        
        setTimeout(() => {
            messageElement.style.display = "none";  
            currentPlayer = currentPlayer === 1 ? 2 : 1; 
            isMoving = false; 
        }, 2000); 
    });
    
    return;
}

    if (position === 10) {
        const newPosition = 16; 
        playSound('jump-sound.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }
        return;
    }
    
    if (position === 25) {
        const newPosition = 36; 
        playSound('jump-sound.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }
        return;
    }
    
    if (position === 44) {
        const newPosition = 62; 
        playSound('jump-sound.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }
        return;
    }
    
    if (position === 68) {
        const newPosition = 70; 
        playSound('jump-sound.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }
        return;
    }

    if (position === 7) {
    const newPosition = 2;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
if (position === 15) {
    const newPosition = 8;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}

    if (position === 31) {
    const newPosition = 19;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}

    if (position === 60) {
    const newPosition = 39;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
    
    if (position === 75) {
    const newPosition = 72;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
    
    if (position === 85) {
    const newPosition = 61;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
    
    if (position === 93) {
    const newPosition = 89;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
    
    if (position === 95) {
    const newPosition = 77;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}
    
    if (position === 98) {
    const newPosition = 91;
    playSound('Falling-Sound-Effects.mp3'); 
    animateMovement(player, position, newPosition, true); 
    if (player === 1) {
        player1Position = newPosition;
    } else {
        player2Position = newPosition;
    }
    return;
}

    if (position === 54) {
        const newPosition = position + 5;
        playSound('+-5.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }

        const opponent = player === 1 ? 2 : 1;
        const opponentPosition = opponent === 1 ? player1Position : player2Position;
        const newOpponentPosition = opponentPosition - 5;
        const validOpponentPosition = Math.max(newOpponentPosition, 1); 
        playSound('+-5.mp3', () => {
            animateMovement(opponent, opponentPosition, validOpponentPosition, true);
        });
        if (opponent === 1) {
            player1Position = validOpponentPosition;
        } else {
            player2Position = validOpponentPosition;
        }

        return;
    }
    
    if (position === 82) {
        const newPosition = position + 5;
        playSound('+-5.mp3', () => {
            animateMovement(player, position, newPosition, true);
        });
        if (player === 1) {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }

        const opponent = player === 1 ? 2 : 1;
        const opponentPosition = opponent === 1 ? player1Position : player2Position;
        const newOpponentPosition = opponentPosition - 5;
        const validOpponentPosition = Math.max(newOpponentPosition, 1);
        playSound('+-5.mp3', () => {
            animateMovement(opponent, opponentPosition, validOpponentPosition, true);
        });
        if (opponent === 1) {
            player1Position = validOpponentPosition;
        } else {
            player2Position = validOpponentPosition;
        }

        return;
    }

    if (position === 1) {
        playSound('start.mp3');
    } else if (position === 100) {
        alert(`تبریک! بازیکن ${player} برنده شد!`);
        playSound('scary.mp3');
        gameOver = true;
    }

    if (diceResult === 6) {
    showToast("آفرین! دوباره تاس بنداز.");
}


    if (position === 1 && diceResult === 6) {
        isMoving = false;
        currentPlayer = player;
        return;
    } else {
        currentPlayer = (diceResult === 6) ? player : (player === 1 ? 2 : 1);
    }

    isMoving = false;
}

function updatePlayerPosition(player, position) {
    const playerElement = document.getElementById(`player-${player}`);
    const pieceElement = playerElement.querySelector('.piece');
    const squareElement = document.querySelector(`.square[data-number="${position}"]`);

    if (squareElement) {
        const rect = squareElement.getBoundingClientRect();
        pieceElement.style.position = 'absolute';
        pieceElement.style.top = `${rect.top + window.scrollY}px`;
        pieceElement.style.left = `${rect.left + window.scrollX}px`;
    }
}

function manualMove() {
    const position = parseInt(document.getElementById('manual-move').value);
    moveToPosition(currentPlayer, position);
}

function moveToPosition(player, position) {
    if (position < 1 || position > 100) {
        alert("موقعیت باید بین ۱ تا ۱۰۰ باشد!");
        return;
    }

    if (player === 1) {
        player1Position = position;
    } else {
        player2Position = position;
    }

    animateMovement(player, player === 1 ? player1Position : player2Position, position);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000); 
}

function playSound(soundFile, callback) {
    const audio = new Audio(`/mar/file/music/${soundFile}`);
    audio.play();

    audio.onended = () => {
        if (callback) {
            callback();
        }
    };
}
