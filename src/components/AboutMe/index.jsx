import {
    Description,
    DFlex,
    FullName,
    JobName,
    ShortInfoBox,
    ShortInfoKey, ShortInfoValue, ShortInfoWrapper
} from "./styles";
import Typing from "react-typing-animation";
import {Backspace} from "react-typing-animation";
import {ContentContainer, ContentTitle} from "../mainContent/styles";

function AboutMe() {
    return (
        <ContentContainer>

            <ContentTitle>Maraim Tukhtasunov</ContentTitle>
            <JobName>I am a
                <Typing startDelay={1500} loop={true} speed={10} hideCursor={true}>
                    <span>FrontEnd</span>
                    <Backspace delay={1500} count={10}/>
                    <span>BackEnd</span>
                    <Backspace delay={1500} count={10}/>
                    <span>FullStack</span>
                    <Backspace delay={1500} count={10}/>
                </Typing>
                <div>developer</div>
            </JobName>
            <DFlex>

                <Description>
                    <a>Dedicated</a> and efficient <a>FullStack</a> developer and teacher of smart and lucky students
                    in <a href="https://ibs-school.uz">IBS School</a>.<br/> <br/>
                    <a>Experienced</a> in application layers, presentation layers, and databases. Certified in
                    both <a>FrontEnd</a> and <a>BackEnd</a> technologies. Developer of Admin Panel, CRM, Corporate
                    website, Telegram
                    bot and so on
                </Description>

                <ShortInfoWrapper>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            Age
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            20
                        </ShortInfoValue>
                    </ShortInfoBox>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            Residence
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            Uzbekistan
                        </ShortInfoValue>
                    </ShortInfoBox>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            Address
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            Uzbekistan, Tashkent, Angren
                        </ShortInfoValue>
                    </ShortInfoBox>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            e-mail
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            <a href="mailto:maraimtuxtasunov@gmail.com">maraimtuxtasunov@gmail.com</a>
                        </ShortInfoValue>
                    </ShortInfoBox>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            Phone
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            <a href="tel:+998990997644">+998 (99) 099-76-44</a>
                        </ShortInfoValue>
                    </ShortInfoBox>
                    <ShortInfoBox>
                        <ShortInfoKey>
                            Freelance
                        </ShortInfoKey><span>:</span>
                        <ShortInfoValue>
                            Available
                        </ShortInfoValue>
                    </ShortInfoBox>
                </ShortInfoWrapper>
            </DFlex>

        </ContentContainer>
    )
}

export default AboutMe
