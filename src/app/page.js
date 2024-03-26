import Image from "next/image";
import im from "../../public/c02.jpg"
export default function Home() {
  return (
    <>
    <br/>
    <div class="container">
        <hr class="h" />
        <h3 style={{marginTop: '3vh'}}>Meet Your Host</h3>
    </div>
    <div style={{marginTop: '3vh'}}></div>
    <div style={{backgroundColor: '#f0efe9'}} class="container box">
        <div class="common">
            <div class="com2">
                <div style={{backgroundColor: 'white', marginTop: "7vh"}} class="row inside_box">
                    <div class="col-sm-6">
                        <div>
                            <div class="common col">
                                <div>
                                    <Image src={im} width={500} height={500} style={{alignItems: 'center'}} class="rounded-circle" alt="..."/>
                                </div>
                                <div class="ss">
                                    <div style={{backgroundColor: 'red' ,borderRadius: '100%' , padding: "1vh"}}><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                            aria-label="Verified Host" role="img" focusable="false"
                                            style={{display: 'block', height: '16px', width: "16px", fill: "white"}}>
                                            <path
                                                d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z">
                                            </path>
                                        </svg></div>
                                </div>
                            </div>

                            <div>
                                <h2 style={{textAlign: "center"}}>Lucy</h2>
                                <h6 style={{textAlign: 'center'}}>Host</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 d">
                        <h4><b>333</b></h4>
                        <p>Reviews</p>
                        <hr/>
                        <h4><b>4.89</b>&#9733;</h4>
                        <p>Rating</p>
                        <hr/>
                        <h4><b>10</b></h4>
                        <p>Years hosting</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="common">
            <div class="com2">
                <br/>
                <div class="common2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}>
                        <path
                            d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z">
                        </path>
                    </svg><span class="sp">Where I went to school: University of Western Michigan</span></div>

                <div class="common2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block', height: '24px', width: '24px', fill: 'currentcolor'}}>
                        <path
                            d="M20 2a2 2 0 0 1 2 1.85V6h6a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H4a3 3 0 0 1-3-2.82V9a3 3 0 0 1 2.82-3H10V4a2 2 0 0 1 1.85-2H12zm8 6H4a1 1 0 0 0-1 .88V12a3 3 0 0 0 2.82 3H13v2H6a4.98 4.98 0 0 1-3-1v11a1 1 0 0 0 .88 1H28a1 1 0 0 0 1-.88V16c-.78.59-1.74.95-2.78 1h-7.17v-2H26a3 3 0 0 0 3-2.82V9a1 1 0 0 0-.88-1zm-10 4a1 1 0 0 1 1 .88V19a1 1 0 0 1-.88 1H14a1 1 0 0 1-1-.88V13a1 1 0 0 1 .88-1H14zm-1 2h-2v4h2zm3-10h-8v2h8z">
                        </path>
                    </svg><span class="sp">My work: Teach English</span></div>

                <div class="common2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block' ,height: '24px', width: '24px', fill: 'currentcolor'}}>
                        <path
                            d="M16 1a11 11 0 0 1 11 10.7v.3c0 3.7-2.03 7.14-6 10.3v7.03c0 .92-.75 1.67-1.67 1.67h-6.66c-.92 0-1.67-.75-1.67-1.67V22.3c-3.85-3.07-5.87-6.39-6-9.98V12A11 11 0 0 1 16 1zm3 26h-6v2h6v-2zm0-4h-6v2h6v-2zM16 3a9 9 0 0 0-9 8.98v.29c.1 2.9 1.8 5.7 5.17 8.4l.42.33h.4l.01-9.67a3 3 0 0 1 6 0V21h.41l.43-.34c3.36-2.7 5.05-5.48 5.15-8.36l.01-.28v-.27A9 9 0 0 0 16 3zm0 7.33-.12.01a1 1 0 0 0-.88 1V21h2v-9.67a1 1 0 0 0-1-1z">
                        </path>
                    </svg><span class="sp">Fun fact: my sense or adventure</span></div>

                <div class="common2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block', height: '24px', width:'24px', fill: 'currentcolor'}}>
                        <path
                            d="M6 23v3h3v2H6v3H4v-3H1v-2h3v-3h2zm9.04-19.29c.28-.9 1.52-.95 1.88-.12l.04.12 2.61 8.72 8.72 2.61c.86.26.94 1.4.22 1.82l-.1.06-.12.04-8.72 2.61-2.61 8.72c-.26.86-1.4.94-1.82.22l-.06-.1-.04-.12-2.61-8.72-8.72-2.61c-.87-.26-.94-1.4-.22-1.82l.1-.06.12-.04 8.72-2.61 2.61-8.72zM16 7.48l-1.81 6.04a1 1 0 0 1-.55.63l-.12.04L7.48 16l6.04 1.81a1 1 0 0 1 .57.45l.06.1.04.12L16 24.52l1.81-6.04a1 1 0 0 1 .45-.57l.1-.06.12-.04L24.52 16l-6.04-1.81a1 1 0 0 1-.57-.44l-.06-.12-.04-.11L16 7.48zM28 1v3h3v2h-3v3h-2V6h-3V4h3V1h2z">
                        </path>
                    </svg><span class="sp">What makes my home unique: The garden/jungle outside my dining room</span>
                </div>

                <div class="common2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block', height: '24px', width: '24px' ,fill: 'currentcolor'}}>
                        <path
                            d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97zm3.75 1.9a2 2 0 0 0-2.98.08l-.1.14-4.84 6.86a2 2 0 0 0 2.05 3.02l.17-.04 4-1.07a1 1 0 0 1 .5 0l3.97 1.06.15.04a2 2 0 0 0 2.13-2.97l-4.95-7.01zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z">
                        </path>
                    </svg><span class="sp">Pets: Coco is the smartest cat I have ever had</span></div>
                <br/>
                <div class="common2">
                    <p>I am quite independent and love the life I lead. I enjoy the garden work that my large backyard
                        offers and also the various tasks that my house gives. I teach English on line to learners all
                        over the world. I have been involved in a theatre group, a book group, volunteer teaching and
                        many other activities. I currently engage in Pilates regularly an...</p>
                </div>
                <div class="common2"><b><u>Show more</u><b> {'>'}</b></b>
                </div>
                <div class="common2 my-4"><button class="btn btn-dark px-3 py-2">Message Host</button>
                </div>
                <hr/>

                <div class="common2"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        role="presentation" focusable="false"
                        style={{display: 'block', height: '24px' ,width: '60px', fill: 'rgb(227, 28, 95)', stroke: 'currentcolor'}}>
                        <g>
                            <g stroke="none">
                                <path
                                    d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z"
                                    fill-opacity=".2"></path>
                                <path
                                    d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z">
                                </path>
                            </g>
                            <path
                                d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z"
                                fill="none" stroke-width="2"></path>
                        </g>
                    </svg><span class="sp common">
                        <p style={{fontSize: "small", marginBottom: "0"}}>To protect your payment, never transfer money or
                            communicate outside of the Airbnb website or app.</p>
                    </span></div>
                    </div>
        </div>
        <br/><br/>
    </div>
    <br/><br/>
    </>
  );
}
