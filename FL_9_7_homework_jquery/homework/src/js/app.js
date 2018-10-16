const $container = $('#container');
const $photos = $(`<div class='photo'></div>`);
$container.append($photos);

function getData() {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', '../src/data/media.json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let obj = JSON.parse(xhr.responseText);
            
            getElements(obj);

            getPopUp(obj);
        }
    }
    xhr.send();
}
getData();

function getElements(obj) {
    const $divRaw1 = $('<div>');
    $divRaw1.addClass('raw1');
    const $divRaw2 = $('<div>');
    $divRaw2.addClass('raw2');
    const $divRaw3 = $('<div>');
    $divRaw3.addClass('raw3');
    const $divRaw4 = $('<div>');
    $divRaw4.addClass('raw4');

    for (let i = 0; i < 12; i++) {
        const $divPhoto = $('<div>');
        $divPhoto.addClass(`photo-div-${i}`);    
        const $img = $('<img>');
        $img.addClass('photo-item');
        $img.attr('src', obj.media[i].display_url);
        if (i >= 0 && i <= 2) {
            $divPhoto.append($img);
            $divRaw1.append($divPhoto);
        } else if (i >= 3 && i <= 5) {
            $divPhoto.append($img);
            $divRaw2.append($divPhoto);
        } else if (i >= 6 && i <= 8) {
            $divPhoto.append($img);
            $divRaw3.append($divPhoto);
        } else {
            $divPhoto.append($img);
            $divRaw4.append($divPhoto);
        }
        
        $photos.append($divRaw1);
        $photos.append($divRaw2);
        $photos.append($divRaw3);
        $photos.append($divRaw4);

        const $hoverText = $(`
            <div class='hover-likes-comment'>
                <div class='like-icon'></div>
                <div class='likes'>${obj.media[i].edge_liked_by.count}</div>
                <div class='comment-icon'></div>
                <div class='comment'>${obj.media[i].edge_media_to_comment.count}</div>
            
            </div>
        `);
        $hoverText.addClass('text show-text');
        $divPhoto.append($hoverText);

        $divPhoto.hover(function(){
            $hoverText.removeClass('show-text');
            }, function(){
            $hoverText.addClass('show-text');
        });
    };

    const $moreButton = $(`
        <div class='view-more'>
            <button class='button-more'>View more</button>
        </div>
    `);
    $photos.append($moreButton);

    let view = 1;

    $('.button-more').click(function() {
        if (view === 1) {
            const $divRaw5 = $('<div>');
            $divRaw5.addClass('raw5');
            const $divRaw6 = $('<div>');
            $divRaw6.addClass('raw6');
    
            for (let i = 12; i < 18; i++) {
                const $divPhoto = $('<div>');
                $divPhoto.addClass(`photo-div-${i}`);    
                const $img = $('<img>');
                $img.addClass('photo-item');
                $img.attr('src', obj.media[i].display_url);
    
                if (i >= 12 && i <= 14) {
                    $divPhoto.append($img);
                    $divRaw5.append($divPhoto);
                } else if (i >= 15 && i <= 17) {
                    $divPhoto.append($img);
                    $divRaw6.append($divPhoto);
                };
    
                $photos.append($divRaw5);
                $photos.append($divRaw6);

                const $hoverText = $(`
                    <div class='hover-likes-comment'>
                        <div class='like-icon'></div>
                        <div class='likes'>${obj.media[i].edge_liked_by.count}</div>
                        <div class='comment-icon'></div>
                        <div class='comment'>${obj.media[i].edge_media_to_comment.count}</div>
                    </div>
                `);
                $hoverText.addClass('text show-text');
                $divPhoto.append($hoverText);
    
                $divPhoto.hover(function(){
                $hoverText.removeClass('show-text');
                }, function(){
                    $hoverText.addClass('show-text');
                });

            };

        } else if (view === 2) {
            const $divRaw7 = $('<div>');
            $divRaw7.addClass('raw7');
            
            for (let i = 19; i < 22; i++) {
                const $divPhoto = $('<div>');
                $divPhoto.addClass(`photo-div-${i}`);    
                const $img = $('<img>');
                $img.addClass('photo-item');
                $img.attr('src', obj.media[i].display_url);
    
                if (i >= 19 && i <= 22) {
                    $divPhoto.append($img);
                    $divRaw7.append($divPhoto);
                }
    
                $photos.append($divRaw7);
                
                const $hoverText = $(`
                    <div class='hover-likes-comment'>
                        <div class='like-icon'></div>
                        <div class='likes'>${obj.media[i].edge_liked_by.count}</div>
                        <div class='comment-icon'></div>
                        <div class='comment'>${obj.media[i].edge_media_to_comment.count}</div>
                    </div>
                `);
                $hoverText.addClass('text show-text');
                $divPhoto.append($hoverText);

                $divPhoto.hover(function(){
                    $hoverText.removeClass('show-text');
                }, function(){
                    $hoverText.addClass('show-text');
                });
            };
        
            $('.button-more').css({display : 'none'});
        };
        view++;

    });
}

function getPopUp(obj) {
    const $modalPopUp = $(`<div class='modal'></div>`);
    for (let i = 0; i < obj.media.length; i++) {
        const $popUpDiv = $(`
            <div class='modal-${i} close'>
                <div class='close-icon'>
                    <div class='next-close'></div>
                    <div class='prev-close'></div>
                </div>
                <div class='prev-btn'></div>
                <div class='next-btn'></div>
                <div class='pop-up'>
                    <div class='pop-up-photo'>
                        <img src='${obj.media[i].display_url}'>
                    </div>
                    <div class='pop-up-description'>
                        <div class='pop-up-header'>
                            <div class='pop-up-header-img'>    
                                <img src='${obj.profile_pic_url}'>
                            </div>
                            <div class='pop-up-header-name-location'>
                                <div class='pop-up-header-name'>
                                    <span><b>${obj.username} &bull; <a href='#'>Follow</a></b></span>
                                </div>
                                <div class='pop-up-header-location'>${obj.media[i].location}</div>
                            </div>

                        </div>
                        <hr>
                        <div class='post-text-comment'>
                            <div class='pop-up-caption'>
                                <div class='pop-up-caption-description'><b>${obj.username}
                                    </b> ${obj.media[i].edge_media_to_caption}
                                </div>
                            </div>
                            <div class='like-comment'>
                                <div class='pop-up-likes'><b>${obj.media[i].edge_liked_by.count} likes</b></div>
                                <hr>
                                <div class='pop-up-comment'>Add a comment...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);

        $modalPopUp.append($popUpDiv);
        $container.append($modalPopUp);
    };

    modalPopUp(obj);    
}

function modalPopUp(obj) {
    for (let i = 0; i < obj.media.length; i++) {
        $(`.photo-div-${i}`).click(function() {
            $(`.modal-${i}`).css({display : 'block'});
            for (let y = 0; y <= i - 1; y++) {
                $(`.modal-${y}`).appendTo('.modal');
            }
        });
    };

    $('.next-btn').click(function() {
        $(`.close:first`).fadeOut().next().fadeIn().end().appendTo('.modal');
    });

    $('.prev-btn').click(function() {
        $(`.close:last`).prependTo('.modal').fadeIn().next().fadeOut();
    });

    $('.close-icon').click(function() { 
        $('.close').css({display : "none"});
        for (let i = 0; i < obj.media.length; i++) {
            $(`.modal-${i}`).appendTo('.modal');
        };
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $('.close').css({display : "none"});
        }
        for (let i = 0; i < obj.media.length; i++) {
            $(`.modal-${i}`).appendTo('.modal');
        };
    });
}