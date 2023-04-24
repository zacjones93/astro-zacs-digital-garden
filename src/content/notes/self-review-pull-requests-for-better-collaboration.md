---
title: Self Review Pull Requests for Better Collaboration
tags: dev
---

## Pull Requests Need Context
A Pull Request (PR) is a conversation with you and your team about the changes you are making to your codebase.

These changes to the codebase can range in flavor and complexity depending on what you’re trying to accomplish.

Dropping teammates (or your future self) into the middle of those changes without any context is doing everyone a disservice.

Not all code is created equal, some code you spent hours sweating over tweaking for subtle bugs or nuances in the constraints that you’re working with while other code is straight forward and works as expected in minutes. 

But to the reviewer, each of these instances is just another line of code changed that they need to skim.

In comes the “LGMT 👍” with the approve button mashed without a second thought.

We all know they just skimmed the files changed, clicked around on the preview deploy and thought “Good enough, works on my machine.”

This is all well and good if the code runs as expected and isn’t a sad, confusing mess when you return to make another update or tweak.

The problem is we’ve all come back to code the next day and thought:

“WTF was I thinking this makes no sense.” 

Multiply that feeling by 10x every week that goes by.

Add in the other humans you are collaborating with and you’ve got a real mess on your hands.

## The Self Review

What you need to do is bring the context that you’ve built up over the hours you’ve spent on your code to the PR that you just put in.

Your job is not done until you’ve clearly communicated the nuances and approaches you took in your code.

The self review is your vehicle for communicating your intent.

If your collaboration tool of choice is GitHub, you do this by heading over to the `Files changed` tab and scan through the changes you made. When you come across a decision that you made you can highlight the trade offs and approach you took given your current restraints.

![self review sparks conversation](/note-images/code-review.png)
_[full PR here](https://github.com/skillrecordings/egghead-next/pull/602)_

Each comment you leave is an entry point for conversation and an opportunity for your team to understand what you did and provide better feedback.

Some points in code that are worth highlighting:

-	Packages you brought in to accomplish a task
-	Patterns you applied
-	Decisions you made that aren’t obvious
-	Further improvements that were deemed out of scope

The goal here is to bring your future self and teammates the context you are holding in your head AND stimulate conversation around the changes that are made so collectively you all can make the best decisions possible. 

Even if you get a “LGMT 👍” after doing a self review, you did your best to communicate what changes were made and the intentions behind them.
