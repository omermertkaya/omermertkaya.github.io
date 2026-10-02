+++
title = 'An Identity and Access Management (IAM) Dashboard Example - Metrics'
date = 2024-06-30T12:00:00+03:00
draft = false
translationKey = 'kimlik-ve-erisim-yonetimi-dashboard'
tags = ['IdentityAndAccessManagement','IAM','IAMMetrics','IAMDashboard']
+++


With the integrations we build in Identity and Access Management (IAM), we automate a great many processes and operations. But are we actually showing the metrics of these automated processes, and the quality of the work we do, in the right way?

Starting from this question, I did some research and decided to design a dashboard. With the dashboard I'm sharing with you here, my goal is to highlight just how valuable IAM's routine, often-taken-for-granted work really is. I also think this approach provides a more understandable and trackable structure. For example, we all know that IAM automatically opens and closes accounts during onboarding and offboarding processes. But what would it be like to see, on a monthly bar chart, exactly how many of these operations were performed?

Even though the IAM team and the other teams working closely with them are aware of the benefits of Identity and Access Management, I think this dashboard can contribute a lot whenever we need to communicate IAM's value more effectively. While laying out the general design of the dashboard, I evaluated the statistics through the lens of managing authorization processes. On the authentication side, you can add different charts depending on your own needs. I'll share the code on my GitHub account so you can easily adjust these metrics yourselves. For the dashboard's design, I used Chart.js and Bootstrap.

Below is an image example of the dashboard design. I should note that when shared as HTML, thanks to Chart.js, the charts have a much more dynamic feel.

If you'd like to view it as a live HTML dashboard, [click here](/pdf/kimlik-ve-erisim-yonetimi-dashboard/dashboard_TR.html).

If you'd like to download it as a PDF, [click here](/pdf/kimlik-ve-erisim-yonetimi-dashboard/dashboard_TRPDF.pdf).

<img src="/images/kimlik-ve-erisim-yonetimi-dashboard/Dashboard.png" alt="AltText">

Visualizing IAM's value and contribution through this dashboard makes the work we do much easier to understand. Chart.js and Bootstrap, used in the dashboard's design, provide both flexibility and visual richness.

You can download the code from my GitHub account and adapt it to your own needs: https://github.com/omermertkaya/iam-dashboard
