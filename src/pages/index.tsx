import React from "react"
import { Link } from "gatsby"
import { Anchor, Box, Heading, Paragraph, Nav, Button, Avatar, Text } from "grommet"
import {Checkmark, LinkNext} from "grommet-icons"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Articles from "../components/articles"
import Image from "../components/image"
import SEO from "../components/seo"
import ApiService from "../services/scribe.tsx"

import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="ARCA DAO" />
    <div id="top">
        <NavBar />
        <div id="intro">
            <Heading color="light-1"> An Arweave Community Fund A </Heading>
            <Paragraph size="large" color="light-1"> Arca is a Decentralized Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem.</Paragraph>
            <Button primary label=<b>Join us</b> href="#joinUs" color="status-ok"/>
        </div>
    </div>

    <div id="articles">
        <Articles />
    </div>
       
    <div id="projects">
        <Box align="center">
            <Heading color="light-1"> Projects </Heading>
            <Box direction = "row-responsive" gap = "xlarge">
                <Box pad="small" border={{ color: "light-3"}} background="light-1" align="center" round="small">
                    <img class="card-image" src={`project1.png`} />
                    <Heading level="3"> Feedweave </Heading>
                    <Paragraph size="large" color="dark-6"> A Decentralised Community Built Social Network </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}} background="light-1" align="center" round="small">
                    <img class="card-image" src={`project2.png`} />
                    <Heading level="3"> Arweave Reverse DNS Gateway </Heading>
                    <Paragraph size="large" size="large" color="dark-6"> Point a domain you own to your arweave DApp. </Paragraph>
                </Box>
                <Box pad = "small" border={{ color: "light-3"}} background="light-1" align="center" round = "small">
                    <img class="card-image" src={`project3.png`} />
                    <Heading level="3"> Permasnap </Heading>
                    <Paragraph size="large" color="dark-6"> Censorship Resistant Moments, embedded on the permaweb. </Paragraph>
                </Box>
            </Box>
        </Box>
    </div>
        
    <div id="about">
        <Box direction = "row" gap="20%" align="center" justify="center">
        <Box>
        <img src={`aboutarca.png`} />
        </Box>
        <Box>
        <Heading> About ARCA </Heading>
        <Paragraph size="large" color="dark-6"> ARCA is a Decentralised Autonomous Organisation created to promote decentralization of the Arweave Blockchain ecosystem. </Paragraph>
        <Paragraph size="large" color="dark-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Paragraph>
        </Box>
        </Box>
    </div>
        
    <div id="permaweb">
        <Heading color="light-1"> What is Permaweb? </Heading>
        <Paragraph size="large" color="light-1"> Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever - for the very first time.</Paragraph>
        <Paragraph size="large" color="light-1"> As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.</Paragraph>
        <Box direction = "column" gap = "small" width="medium">
            <Button primary label=<b>Visit ARWEAVE</b> href="https://arweave.org" target="_blank" color = "lightgreen" gap = "xlarge" icon=<LinkNext color="light-1"/> reverse="true"/>
            <Button primary label=<b>Built on the PERMAWEB</b> href="https://arweaveapps.com" target="_blank" color = "#1E90FF" gap = "medium" icon=<LinkNext color="light-1"/> reverse="true"/>
        </Box>
    </div>
        
    <div id="joinUs">
        <Box direction="row-responsive" gap="none" justify="center">
            <Box width = "large" pad = "medium" border={{ color: "light-3" }} round="small" alignSelf="center">
                <Heading> Why would you join us:</Heading>
                <ul>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6">Brainstorm  innovate ideas and build them using decentralized and open source tools.</Text></li><br/>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6"> Get your hands on Decentralized Finance by taking part of a democratic voting process  to ensure we put our DAI towards the right areas - whelther technology grants or operational tasks.</Text></li><br/>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6"> Potentially earn DAI through grants and helping ARCA with operational activities.</Text></li><br/>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6">Learn the latest in decentralized technology, built around Arweave.</Text></li><br/>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6"> Network your skills with other developers, investors and blockchain experts.</Text></li><br/>
                    <li style="list-style-type:none"><Checkmark color="green"/><Text size="large" color="dark-6"> Access to test servers and software for developing proof of concepts.</Text></li><br/>
                </ul>
            </Box>
            <Box pad="medium" background="brand" round="small" alignSelf="center" width="large" align="center">
                <Heading color="light-1"> Be part of ARCADAO</Heading>
                <Paragraph size="large" color="light-1"> ARCA is calling all those passionate about technology and Arweave - whelther you are a dev, a network engineer, a social media guru, a writer, a leader, a ower, or even if even you just have the next big, decentralized idea.</Paragraph>
                <Button primary label=<b>Join us</b> href="/submitmembership" size="large"/>
            </Box>
        </Box>
    </div>
        
    <div id="submitproposal">
        <Box align="center">
        <img src={`submitproposal.png`} />
        <Heading color="light-1"> Have a vision for the permaweb? </Heading>
        <Paragraph size="large" color="light-1"> We exist to fund development of anything that makes the permaweb better, anything that makes it easier to work with, and anything that brings more users in. If you have a cool idea you'd like to bring to life, and the time and skills to make it happen, check out our grant application form</Paragraph>
        <Button primary label=<b>Submit Proposal</b> href="/submitproposal" size="large" color="light-1" />
        </Box>
    </div>
  </Layout>
)

export default IndexPage
