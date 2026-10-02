+++
title = 'Beyond Passwords: The FIDO Solution'
date = 2024-03-30T22:17:41+03:00
draft = false
translationKey = 'Şifrelerin-Ötesinde-FIDO-Çözümü'
tags = ['FIDO','UAF','2FA']
+++

## Fancy Cracking FIDO's Secrets?

FIDO stands for Fast Identity Online Authentication.

You can think of FIDO as a handshake between the online world and the real world. Through it, we prove to the online world that we are who we say we are. The FIDO authentication method strikes a solid balance between technology and security.

There are various ways it's used, but here's the picture I want you to imagine: no more constantly changing and memorizing separate passwords for every banking app you use. Instead, picture signing in with your fingerprint, face, voice, or iris.

In fact, when you think about it, thanks to the banking infrastructure in Turkey, many banking apps have already started using facial recognition to verify logins, and we can now sign in to the app very easily and quickly.

Of course, alongside FIDO, banks typically still ask you to confirm your 6-digit PIN again once you've logged in and want to send money. Here, building more demanding, dual-verification structures for financial applications matters a great deal for financial security.

## Let's Understand FIDO's Protocols

#### UAF (User Authentication Framework):

Unlike traditional password-based methods, the User Authentication Framework lets you sign in using biometrics or a security key (a USB authentication device).

![IBM Security Verify](/images/sifrelerin-otesinde-fido/fido-uat.png)

### U2F (Universal 2nd Factor):

You could think of this method as basically 2FA, but the two actually have different characteristics.
With U2F, on top of the standard username and password we normally use to sign in, there's a unique USB device generated specifically for us — the one I mentioned above — and the session isn't allowed to open unless verification happens through that device. The goal here is to achieve 2FA through a directly physical method.

![IBM Security Verify](/images/sifrelerin-otesinde-fido/fido-cihaz.png)

Even though the use of FIDO authentication protocols is becoming more widespread, verification on the web side hasn't yet reached the same level of maturity. For the web, methods like 2FA via mobile push notification, verification via a security code sent to email, or time-based authenticator codes are still the more commonly preferred options.
