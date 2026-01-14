---
title: I built AirDrop for VR (or any other device)
date: 2026-01-14
excerpt: I got tired of this not being solved.
video: https://www.youtube.com/watch?v=YgtoojAtUw8
---
It's always been a struggle to send a video to my phone or my computer from my headset directly. 

In 2026 I want to solve my own problems with code, something I haven't done much of in the past few years. So I built something new. It's always rewarding to build something, NOT for other people, for you, for the problem you're having. 

One day I was sat at home, tinkering with some new VR SDKs. I record about an hour of gameplay using the little inbuilt screen capture and it goes perfectly. As soon as the game is done, I close the game, open up the gallery and there is my footage. 

The next step is getting the video off the headset. You can do this in two ways, plug the headset into a computer and use a file transfer or you can use the Meta Quest App. 

This sucks.

It takes 40 minutes to sync with the cloud, a further 10 minutes to show in the app and then my phone is out of action for 15 minutes while it downloads because they don't have background download support.

All I want to do is copy a few hundred megabytes from my headset to my phone.

Then I started building DropVR. Based on [WebRTC](https://webrtc.org). Web Real Time Communication is this ultra low latency, peer-to-peer protocol, it's relatively new, only just hit version 1.0 in 2018. 

For a network protocol that's wild. 

[WebRTC](https://webrtc.org) fit my needs perfectly. It allows you to send a file across a network, without the bytes of data going through the internet. It's encrypted so the files can't be intercepted in transit and it's fast. Really fast.

Immediately I got work building with the protocol, it's mainly intended for low latency media interactions, sending audio and video in realtime between callers.  The thing is, [WebRTC](https://webrtc.org) will let you send any data across it's connection. Even files.

Admittedly you need a signalling server, this is server that live on the internet that kind of works like those old phone switchboards, you say who you're trying to send a message to and they figure out how to connect you, then the server dips. It is no longer needed, and is no longer in loop.

So you wanna see it?

Go to DropVR.com on any two devices with modern browsers. As long as the devices are on the same network, they will detect each other and assign names. Then drop a file or tap the user to send them something. It's quite simple. Very useful.

If you know me, once I build something useful I can't stop myself adding more features. Here's what DropVR currently has:

- Send text.
- Instant messenger-style chat.
- File transfer.
- Screensharing!

I built the screenshare so that I could livestream my MacBook screen on TikTok from a Windows stream PC, TikTok suspended the stream multiple times, I don't know how they know but they know. You've been warned!

----

DropVR is live at dropvr.com, it works as an airdrop between any two devices, enjoy it, break it.

*Keep building*

[Go to DropVR](https://dropvr.com)



