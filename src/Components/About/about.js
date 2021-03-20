import React from 'react';
import Container from 'react-bootstrap/Container';
import profilepic from './Images/profile2.jpg'

function About() {
    return (
        <>
        <section className="page-section bg-dark" id="about">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About Me</h2>
                    <br />
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="img-fluid" src={profilepic} alt="Oscar G. Medina" />
                            <h4>Oscar G. Medina</h4>
                            <p className="text-muted text-center">Imagination creates reality" --Richard Wagner</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="team-member">
                            <p>Oscar was born in San Antonio, TX and grew up in Laredo, TX.
                                Growing up he had a interest in music, computers, and video games.
                                He began learning how to play guitar at the age of 10 and then
                                learned bass guitar at age 11 where he was in his first garage
                                band with his school friends. He then joined the middle school
                                band in eighth grade as a beginner and picked the french horn as
                                his first band instrument. At United High School, he was enrolled
                                in the Engineering & Technology Magnet where he had the
                                opportunity to learn engineering fundamentals and be hands on with
                                a variety of software and technology. After earning his high
                                school diploma, he began working on his Bachelor of Music at Texas
                                A&M University – Kingsville. While a horn and bass music student,
                                he performed with the TAMUK Horn Choir, Q1 Horn Quartet, Jazz
                                Band, Jazz Combos, and the TAMUK Percussion Studio. He has
                                performed at venues and concert halls ranging from states in the
                                U.S. including Texas, Alabama, Illinois, Colorado, to overseas in
                                Germany and Switzerland.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="team-member">
                            <p>After graduation from TAMUK, Oscar earned a position from La Joya
                                ISD as Head Orchestra Director at Palmview HS where he taught
                                guitar and orchestra classes from 2010-2014. In 2014, he then
                                began working for McAllen ISD at Morris MS as an Associate Band
                                Director where he taught concert band, marching band, jazz band,
                                and brass beginners. As an educator, his students were regular
                                members of the TMEA Region XV Band/Orchestra, TMEA XV Jazz Bands,
                                and were superior performers at UIL State Solo & Ensemble and UIL
                                Concert & Sight-Reding contests. Outside of work, Oscar performed
                                horn with the McAllen Wind Ensemble and bass guitar with the RGV
                                Swing Street Big Band.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>      
        </>
    )
}

export default About;