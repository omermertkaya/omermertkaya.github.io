+++
title = 'Email Harvesting: A Cybersecurity Perspective and a Python Example'
date = 2025-03-12T10:41:21+03:00
draft = false
translationKey = 'email-harvesting'
tags = ['Bug Bounty', 'Cybersecurity', 'Email Security', 'Red Team', 'Phishing']
+++

Email harvesting is a technique frequently used by **Red Team** members during the **reconnaissance** phase of cybersecurity work. Whether at a company or on a personal level, when our email addresses are exposed on forums, websites, documents, and similar places, malicious actors can collect those addresses and use them to carry out cyberattacks.

That said, this technique isn't only used by malicious actors. On the contrary, security teams can use the same kind of information gathering **proactively** to protect against potential **spam campaigns and phishing attempts**.

---

## A Simple Email Harvesting App Built With Python

You can download the simple email harvesting app I built [by clicking here](https://github.com/omermertkaya/email-harvesting) on GitHub.

### How Does It Work?
- Based on the **search parameter** the user specifies, it queries Google or Bing search engines.
- It scans the results to **detect email addresses**.
- It exports the collected email addresses in **Excel, CSV, or TXT** format.
- It logs **source information** to a log file, showing which email address was found on which site.

### How Do I Get API Keys?

- I used SerpApi for the Google search engine. You can click [here](https://serpapi.com/) to get a SerpApi key.
- To get an API key for the Bing search engine, you can click [here](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api).

![Email Harvesting App](/images/email-harvesting/email1.png)

Tools like this serve as a **preventive step** for security teams, helping analyze how a company's or an individual's email addresses show up on the internet. If this kind of information has already spread out into the world, the necessary **privacy and protective measures** should be taken.
