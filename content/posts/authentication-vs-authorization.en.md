+++
title = 'Authentication vs Authorization Concepts'
date = 2024-07-11T22:30:46+03:00
draft = false
translationKey = 'authentication-authorization-kavramlari'
tags = ['authentication','authorization','identity and access management']
+++

Authentication and Authorization are two distinct, important concepts.

## Authentication (AuthN)

Authentication answers the question "Who are you?"

I can say I'm Ömer Mert. But how does a computer know who we actually are?

Username: omermertkaya
Password: xxxxxx


For example, when we turn on our computer, Windows asks for our username and password to verify who is turning it on. In the same way, when we log in to different websites, we verify that the account belongs to us.

Continuing with the hotel example, when we check in to a hotel, the front desk clerk asks for our ID (our username and password) to authenticate us. Once the clerk verifies our identity, they hand us our room key card. The key card shows that our identity (Authentication) has been verified and that it belongs to us.

<img src="/images/authentication-authorization/authenticationvsauthorization.png" alt="Entitlement-Human_Resources" style="width:100%;">


## Authorization (AuthZ)

Authorization answers the question "What permissions do you have?"

I have read, write, and delete permissions.

Once identity has been verified, authorization is the set of permissions that identity holds. For example, on a website we might have permission to read posts, write posts, or delete posts. Going back to the hotel example, when we check in, the clerk tells us which doors our room key can open (for instance, the gym or the swimming pool) and which facilities we're allowed to use. That's part of the authorization process.
