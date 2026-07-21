# General Programming Vocabulary Reference

## How to Use This Reference

Programming contains many words that are unfamiliar outside technology, as well as ordinary words that have a specialised technical meaning.

You are not expected to memorise this glossary.

Use it when:

* A tutorial uses an unfamiliar term
* An error message contains technical language
* A developer describes how a system works
* Documentation assumes prior knowledge
* A familiar word appears to be used in an unfamiliar way

The exact meaning of some terms can vary between programming languages and technologies. These definitions describe the most common general meaning.

---

# A

## Abstraction

A simplified way of working with something complicated without needing to understand every detail inside it.

For example, a function called `sendEmail()` may hide all the complicated networking required to send an email.

**Think of it as:** Driving a car using the steering wheel and pedals without needing to understand the engine.

---

## Access

The ability to read, use, change or execute something.

Access may be restricted by:

* Permissions
* Scope
* User roles
* Security rules

---

## Accessibility

Designing software so that it can be used by people with different abilities and assistive technologies.

Accessibility may include:

* Keyboard navigation
* Screen-reader support
* Sufficient colour contrast
* Captions
* Clear labels
* Alternatives to mouse-only interaction

---

## Algorithm

An ordered set of steps used to solve a problem or complete a task.

Sorting a list, finding the shortest route and shuffling a deck all require algorithms.

---

## API

API stands for Application Programming Interface.

An API defines how one piece of software can communicate with another.

An API may allow a program to:

* Request information
* Submit information
* Trigger an action
* Use another system’s features

**Think of it as:** A service counter with a documented list of requests that can be made.

---

## Argument

An argument is an actual value supplied to a function when it is called.

In:

```javascript
greet("Alex");
```

`"Alex"` is the argument.

The function’s parameter is the labelled place that receives it.

---

## Array

An ordered collection of values.

An array might contain:

* Names
* Scores
* Cards
* Tasks
* Objects

Array positions are commonly identified by an index.

---

## Asynchronous

Asynchronous work can begin without forcing the rest of the program to stop and wait for it to finish.

Common asynchronous activities include:

* Downloading information
* Reading a file
* Waiting for a timer
* Contacting an API

**Think of it as:** Ordering food, then doing something else while it is prepared.

---

## Atomic

An operation is atomic when it is treated as one indivisible unit.

It either completes fully or is treated as though it did not happen.

This is especially important when updating databases or performing transactions.

**Think of it as:** A bank transfer that must both remove money from one account and add it to another, or do neither.

---

## Authentication

Authentication checks who someone is.

Examples include:

* Passwords
* Security codes
* Fingerprints
* Login tokens

**Authentication asks:** Who are you?

---

## Authorisation

Authorisation checks what an authenticated person is allowed to do.

Examples include:

* Whether a user can view a file
* Whether a manager can approve a request
* Whether an administrator can delete an account

**Authorisation asks:** What are you allowed to do?

---

# B

## Backend

The part of an application that operates behind the visible interface.

The backend may handle:

* Databases
* Business rules
* Authentication
* File storage
* APIs
* Server processing

The frontend communicates with the backend.

---

## Binary

A number system using only two digits:

* `0`
* `1`

Computers ultimately represent information using binary states.

Binary is also sometimes used informally to describe a compiled program file rather than its source code.

---

## Boolean

A value that can only be:

* `true`
* `false`

Booleans commonly represent yes-or-no conditions.

---

## Branch

A branch can mean two related things.

### In program flow

A possible path through the code, usually selected by a condition.

### In version control

An independent line of development where changes can be made without immediately affecting the main version.

---

## Breakpoint

A breakpoint tells a debugger to pause a running program at a particular line.

While paused, a programmer can inspect:

* Variables
* Function calls
* Current state
* The next instruction

---

## Bug

A defect that causes a program to behave differently from what was intended.

A bug may result from:

* Incorrect logic
* Missing instructions
* Unexpected input
* Incorrect assumptions
* Interaction between systems

---

## Build

A build is a prepared version of a program produced from its source files.

Building may involve:

* Combining files
* Compiling code
* Checking types
* Optimising assets
* Preparing files for release

The word may refer to either the process or its result.

---

# C

## Cache

A cache temporarily stores information that may be needed again.

Caching can improve speed by avoiding repeated calculation or downloading.

A cache can also cause confusion if it contains old information.

**Think of it as:** Keeping a frequently used document on your desk instead of retrieving it from storage every time.

---

## Callback

A callback is a function given to another part of the program to be run later.

Callbacks are commonly used with:

* Events
* Timers
* API requests
* Array operations

**Think of it as:** Leaving instructions that say, “When this finishes, call this worker.”

---

## Class

A class is a template used to create objects with a shared structure and behaviour.

For example, an `Enemy` class might define that every enemy has:

* Health
* A name
* An attack action

Not all programming styles or languages require classes.

---

## Client

A client is a program or device that requests services or information from another system.

A web browser is commonly a client.

The system responding to it is usually called the server.

---

## Clone

To clone something means to create a separate copy.

In Git, cloning a repository creates a local copy of the project and its recorded history.

---

## Cloud

The cloud refers broadly to computing services hosted on remote infrastructure and accessed over a network.

Cloud services may provide:

* File storage
* Databases
* Servers
* Applications
* Processing power

“The cloud” still consists of physical computers. They are simply operated elsewhere.

---

## Codebase

The complete collection of source code belonging to a particular program or project.

---

## Commit

A commit is a recorded group of changes in a version-control system.

A commit usually includes:

* The changed files
* Who made the change
* When it was made
* A message describing the change

**Think of it as:** A named checkpoint in the project’s history.

---

## Compile

Compilation translates source code into another form before it runs.

This may produce:

* Machine code
* Bytecode
* Optimised JavaScript
* Another lower-level representation

Some languages are mainly compiled, while others are mainly interpreted. Modern systems often combine both approaches.

---

## Concurrency

Concurrency means managing multiple tasks whose work overlaps in time.

The tasks do not necessarily run at the exact same instant.

**Think of it as:** One cook managing several dishes by switching between them as each requires attention.

---

## Configuration

Configuration is a collection of settings that controls how a program behaves.

Configuration may include:

* Server addresses
* Feature settings
* Display options
* Environment details
* Security settings

Configuration is generally kept separate from the program’s main logic.

---

## Constant

A constant is a named value that is not intended to change after it is assigned.

Some languages strictly prevent changes to constants. Others prevent reassignment but may still allow the contents of a referenced object to change.

---

## Constructor

A constructor is a special function used when creating a new object or instance.

It commonly supplies the object’s starting values.

---

## Container

A container can have several meanings.

### In user interfaces

An element that holds or groups other elements.

### In software infrastructure

An isolated environment that packages a program with the files and dependencies it needs to run.

Docker is a common container technology.

---

## Cookie

A cookie is a small piece of information stored by a browser for a website.

Cookies are commonly used for:

* Login sessions
* Preferences
* Tracking
* Remembering settings

Cookies may be sent to the server with future requests.

---

## CRUD

CRUD describes four common operations performed on stored information:

* Create
* Read
* Update
* Delete

Many applications are largely organised around these four actions.

---

# D

## Database

A database is a system for storing, organising and retrieving information.

Databases may store:

* Users
* Products
* Tasks
* Transactions
* Game saves
* Messages

---

## Data Structure

A data structure is a particular way of organising information so it can be used efficiently.

Examples include:

* Arrays
* Objects
* Sets
* Maps
* Queues
* Trees
* Graphs

---

## Debugger

A debugger is a tool used to inspect a program while it runs.

A debugger can often:

* Pause execution
* Step through instructions
* Inspect values
* Follow function calls
* Identify where errors occur

---

## Dependency

A dependency is something a program relies on.

A dependency may be:

* A library
* A framework
* Another module
* An external service
* A particular version of software

---

## Deploy

To deploy software means to place a working version into an environment where it can be used.

Deployment might mean:

* Publishing a website
* Updating a server
* Releasing a mobile application
* Installing software for users

---

## Deprecate

A deprecated feature still exists but is no longer recommended.

It may be:

* Replaced by a better option
* Scheduled for removal
* Kept temporarily for compatibility

Deprecation is a warning to avoid using the feature in new work.

---

## Deserialise

To deserialise means to convert stored or transmitted text or bytes back into data structures the program can use.

It is the reverse of serialisation.

---

## Deterministic

A deterministic process always produces the same result when given the same starting conditions and input.

A non-deterministic process may produce different outcomes.

Random number generation, timing and external services can make behaviour appear non-deterministic.

---

## Documentation

Documentation is written information explaining how software works or how it should be used.

Documentation may include:

* Setup instructions
* API references
* Examples
* Architecture descriptions
* User guides
* Comments

---

# E

## Encode

Encoding changes information into another representation so it can be stored, transferred or interpreted correctly.

Encoding is not necessarily intended to provide security.

Examples include:

* UTF-8 text encoding
* Base64
* URL encoding

Encoding is usually designed to be easily reversed.

---

## Encryption

Encryption transforms information into an unreadable form using a cryptographic method and a key.

Someone with the correct key can decrypt the information.

Encryption protects confidentiality.

**Encryption is not the same as encoding, hashing or obfuscation.**

---

## Endpoint

An endpoint is a specific address or operation made available by an API.

Examples might include endpoints for:

* Retrieving a user
* Creating an order
* Updating a task
* Deleting a file

**Think of it as:** One service window within the larger API service counter.

---

## Entity

An entity is a distinct thing represented within a program.

Examples include:

* A user
* An enemy
* A product
* A task
* A card

An entity usually has its own identity and related information.

---

## Environment

An environment is the setting in which software runs.

Common environments include:

* Development
* Testing
* Staging
* Production

Different environments may use different databases, settings and security rules.

---

## Error

An error is a problem detected while code is being read or run.

Common broad categories include:

### Syntax error

The code could not be understood.

### Runtime error

A problem occurred while the code was running.

### Logic error

The code ran, but produced the wrong result.

---

## Exception

An exception is a reported problem that interrupts normal program execution.

Programs can sometimes catch exceptions and respond safely rather than stopping completely.

---

## Execute

To execute code means to run it.

The computer follows the instructions and performs the described actions.

---

# F

## Framework

A framework is a structured foundation for building software.

It usually provides:

* Standard organisation
* Built-in tools
* Reusable components
* Rules for how application parts fit together

A framework generally controls more of the program’s structure than a library.

**Common distinction:**

* You call a library.
* A framework often calls your code.

---

## Frontend

The frontend is the part of an application the user directly sees and interacts with.

It may include:

* Pages
* Buttons
* Forms
* Menus
* Animations
* Displayed information

In a web application, the frontend usually runs in the browser.

---

## Function

A function is a named group of instructions that performs a task.

A function may:

* Receive arguments
* Read information
* Change state
* Produce a return value

---

# G

## Garbage Collection

Garbage collection automatically identifies memory that a program no longer needs and makes that memory available for reuse.

JavaScript uses automatic garbage collection.

---

## Global

Something is global when it can be accessed from a wide part of the program.

Global variables can be convenient, but excessive use makes programs harder to understand because many different parts can change the same information.

---

## Graph

A graph is a data structure containing:

* Nodes
* Connections between nodes

Graphs can represent:

* Maps
* Social networks
* Dependencies
* Dialogue paths
* Concept maps

A graph is not necessarily a visual chart.

---

# H

## Hard-Coded

Something is hard-coded when a value or decision is written directly into the program rather than supplied through configuration or data.

Example:

```javascript
const taxRate = 0.1;
```

Hard-coding is not always wrong, but it can make future changes more difficult.

---

## Hash

A hash is a fixed-size result produced from input data by a hashing function.

Hashes are used for:

* Detecting changes
* Comparing data
* Looking up values
* Protecting passwords when used correctly

A cryptographic hash is designed to be one-way. It should not be treated like reversible encryption.

---

## Hosting

Hosting is the service or infrastructure used to make a website, application or data available over a network.

---

# I

## Idempotent

An operation is idempotent when repeating it produces the same final effect as performing it once.

Examples:

* “Set status to Complete” is usually idempotent.
* “Add 10 points” is not idempotent because each repetition changes the result again.

Idempotency is important for APIs and systems where a request might accidentally be repeated.

---

## Immutable

Something is immutable when it cannot be changed after it is created.

Instead of modifying an immutable value or object, a new version is created.

Immutability can make programs easier to reason about because old values cannot be unexpectedly changed elsewhere.

---

## Implementation

Implementation is the actual code and technical structure used to make a design or requirement work.

Two programs may provide the same behaviour using different implementations.

---

## Import

To import means to make code or data from another module available in the current file.

---

## Index

An index may mean:

### In an array

The numbered position of an item.

### In a database

A structure that helps information be found more quickly.

### In a project

A main or starting file, such as `index.html`.

---

## Initialise

To initialise something means to give it its starting state or starting value.

---

## Instance

An instance is one specific object created from a class or template.

If `Enemy` is the class, each individual goblin may be an instance of `Enemy`.

---

## Interface

Interface can mean several things.

### User interface

The part of the software through which the user interacts.

### Programming interface

A defined way for software components to communicate.

### Type-system interface

A definition of the properties or behaviour something must provide.

---

## Interpreter

An interpreter reads and executes source code directly or incrementally rather than producing a separate executable before running.

JavaScript engines interpret and compile code internally using modern mixed techniques.

---

# J

## JSON

JSON stands for JavaScript Object Notation.

It is a text format used to store and transfer structured information.

JSON commonly represents:

* Objects
* Arrays
* Strings
* Numbers
* Booleans
* Null values

Despite its name, JSON is used by many languages, not only JavaScript.

---

# K

## Key

A key is a name used to identify information.

In an object:

```javascript
{
  name: "Alex"
}
```

`name` is the key.

`"Alex"` is the value.

---

## Keyword

A keyword is a word reserved by a programming language for a special purpose.

JavaScript keywords include:

* `if`
* `else`
* `function`
* `return`
* `const`

Reserved keywords generally cannot be used as ordinary variable names.

---

# L

## Library

A library is a collection of reusable code that a program can call when needed.

Libraries may provide:

* Date handling
* Visual components
* Mathematics
* Networking
* Testing tools

**Think of it as:** A toolbox the program can use.

---

## Local

Something is local when it is available only within a limited part of a program.

A local variable inside a function is normally unavailable outside that function.

---

## Log

A log is a recorded message describing something that happened in a program.

Logs may record:

* Errors
* User activity
* Security events
* Processing steps
* System health

Logging is the act of creating those records.

---

## Logic

Logic is the collection of rules and decisions that determine how a program behaves.

A logic error occurs when the instructions are valid but the intended rules have been expressed incorrectly.

---

# M

## Merge

To merge means to combine changes from different branches or sources.

In version control, merging combines the histories and file changes from separate branches.

A merge conflict occurs when the system cannot safely decide how competing changes should be combined.

---

## Method

A method is a function associated with an object or class.

For example, a player object might have a method named `attack()`.

The exact distinction between functions and methods depends on the language and context.

---

## Middleware

Middleware is software that operates between other parts of a system.

In a web server, middleware may:

* Check authentication
* Record logs
* Validate requests
* Transform data
* Handle errors

**Think of it as:** A checkpoint every request passes through before reaching its destination.

---

## Module

A module is a self-contained unit of code responsible for a particular area.

Modules help divide a large program into manageable parts.

Examples include:

* Inventory module
* Authentication module
* Scoring module

---

## Mutable

Something is mutable when it can be changed after it is created.

Arrays and objects in JavaScript are generally mutable.

Mutable data is convenient, but unexpected changes can make programs harder to reason about.

---

# N

## Namespace

A namespace groups names to prevent them from conflicting with identical names used elsewhere.

**Think of it as:** Two departments being able to use the same form name because each form belongs to a clearly identified department.

---

## Node

A node is one item within a connected structure.

Nodes may appear in:

* Graphs
* Trees
* The DOM
* Networks

A DOM node may represent an HTML element, text or another part of the document.

---

## Null

`null` usually represents an intentional absence of a value.

It often means:

* Nothing is currently selected
* No object exists here
* The value has deliberately been cleared

Its exact behaviour varies by language.

---

# O

## Object

An object groups related information and behaviour.

An object may describe:

* A person
* A task
* A game character
* A product
* A card

Objects commonly contain properties and methods.

---

## Obfuscation

Obfuscation deliberately makes code or data harder for a person to understand.

It may be used to:

* Discourage casual inspection
* Reduce readable names
* Make reverse engineering more difficult

Obfuscation is not strong security.

If something must remain secret, proper security and encryption are required.

---

## Open Source

Open-source software makes its source code available under a licence that permits particular forms of use, review, modification or redistribution.

“Open source” does not automatically mean:

* Free of charge
* Unrestricted
* Secure
* Maintained

The licence determines what is allowed.

---

## Operator

An operator is a symbol or word that performs an operation.

Examples include:

* `+` for addition
* `-` for subtraction
* `===` for comparison
* `=` for assignment

---

## Override

To override means to replace or provide a more specific version of existing behaviour or configuration.

In CSS, a later or more specific rule may override another rule.

In object-oriented programming, a subclass may override a method inherited from a parent class.

---

# P

## Package

A package is a distributable collection of code and related information.

Packages often include:

* Reusable modules
* Version information
* Dependency information
* Documentation

Package managers help install and update packages.

---

## Package Manager

A package manager is a tool used to install, update and track software dependencies.

Examples include:

* npm
* pnpm
* Yarn
* pip

---

## Parameter

A parameter is a named input declared by a function.

In:

```javascript
function greet(name) {
}
```

`name` is the parameter.

When `greet("Alex")` is called, `"Alex"` is the argument.

---

## Parse

To parse means to read information and interpret its structure.

Examples include:

* Parsing JSON text into an object
* Parsing text into a number
* Parsing a date
* Parsing source code

---

## Payload

A payload is the main data being carried in a request, response, message or event.

**Think of it as:** The package contents rather than the delivery envelope.

---

## Persistent

Information is persistent when it remains available after the current process, page or session ends.

Persistent data may be stored in:

* A file
* A database
* Local Storage
* Cloud storage

---

## Pointer

A pointer is a value that identifies a location in memory.

Some languages expose pointers directly.

JavaScript normally uses references without exposing raw memory addresses.

---

## Polling

Polling means repeatedly checking whether new information or a changed condition is available.

Example:

A program asks a server every ten seconds whether a job has finished.

Polling is simple but may be less efficient than receiving an event or webhook.

---

## Process

A process is a running instance of a program managed by the operating system.

The word process can also refer more generally to a sequence of work being performed.

---

## Production

Production is the live environment used by real users.

Changes should normally be tested in development or staging before being placed into production.

---

## Protocol

A protocol is a defined set of rules for communication between systems.

Examples include:

* HTTP
* HTTPS
* WebSocket
* TCP

**Think of it as:** An agreed language and procedure for exchanging messages.

---

## Prototype

A prototype is an early version created to test an idea.

It may be incomplete, visually rough or built using shortcuts.

Its purpose is learning rather than final delivery.

---

## Pull Request

A pull request is a request to review and merge a set of version-controlled changes into another branch.

It commonly provides a place for:

* Reviewing code
* Discussing changes
* Running automated checks
* Approving or rejecting work

Some systems call this a merge request.

---

# Q

## Queue

A queue is a collection where items are generally processed in the order they were added.

First in, first out.

**Think of it as:** People waiting in a line.

---

## Query

A query is a request for information.

Queries may be used to:

* Search a database
* Find webpage elements
* Request API data
* Filter stored records

---

# R

## Race Condition

A race condition occurs when the result depends on the unpredictable timing or order of multiple operations.

Two operations may both read or change the same information before the other has finished.

Race conditions are common concerns in concurrent and asynchronous systems.

---

## Recursion

Recursion occurs when a function calls itself, directly or indirectly.

Recursive approaches are often useful for problems containing smaller versions of the same problem, such as:

* Folder structures
* Trees
* Nested menus
* Mathematical sequences

Recursion must have a stopping condition.

---

## Reference

A reference identifies an existing object rather than creating a completely independent copy.

When two variables refer to the same mutable object, changing it through one reference may make the change visible through the other.

**Think of it as:** Two people holding directions to the same filing cabinet rather than each having a separate cabinet.

---

## Refactor

To refactor means to improve the structure of code without deliberately changing its external behaviour.

Refactoring may improve:

* Readability
* Reuse
* Organisation
* Testing
* Maintainability

---

## Regression

A regression occurs when a new change causes something that previously worked to stop working.

Regression testing checks that existing behaviour still works after changes.

---

## Release

A release is a version of software prepared for use or distribution.

A release may include:

* New features
* Fixes
* Documentation
* Version notes
* Deployment files

---

## Repository

A repository is a project storage location managed by version-control software.

It generally contains:

* Source files
* Change history
* Branches
* Commits
* Project configuration

---

## Request

A request is a message asking another system to perform an operation or provide information.

A server usually returns a response.

---

## Response

A response is the result returned after a request.

It may include:

* Data
* A success status
* An error
* A webpage
* A file

---

## Return Value

A return value is the result a function sends back to the code that called it.

---

## Runtime

Runtime can mean:

### The period while a program is running

A runtime error occurs during execution.

### The software environment used to run code

Node.js is a JavaScript runtime outside the browser.

---

# S

## Schema

A schema defines the expected structure of data.

A schema may describe:

* Field names
* Data types
* Required values
* Relationships
* Validation rules

**Think of it as:** A blank standardised form showing which fields every record must contain.

---

## Scope

Scope determines where a name, variable or function can be accessed.

Common scopes include:

* Global scope
* Function scope
* Block scope
* Module scope

---

## Script

A script is a program or code file, often relatively small, that automates work or adds behaviour.

JavaScript files are often called scripts.

---

## Serialise

To serialise means to convert structured program data into a format that can be stored or transmitted.

For example, a JavaScript object may be serialised into JSON text.

---

## Server

A server is a program or computer that provides services or information to clients.

A server may:

* Deliver webpages
* Process API requests
* Store files
* Query databases
* Authenticate users

---

## Session

A session represents a period of interaction between a user and a system.

Session information may include:

* Login state
* Shopping-cart contents
* Temporary preferences
* Recent activity

---

## Side Effect

A side effect is a change caused by a function beyond simply returning a value.

Examples include:

* Changing a variable outside the function
* Updating the page
* Saving a file
* Sending a network request
* Writing to a database

Side effects are often necessary, but should be controlled and understood.

---

## Source Code

Source code is the human-readable code written by programmers.

It may later be interpreted, compiled, bundled or transformed.

---

## Stack

A stack is a collection where the most recently added item is usually removed first.

Last in, first out.

**Think of it as:** A stack of plates.

The call stack records the active chain of function calls.

---

## Stack Trace

A stack trace shows the sequence of function calls that led to an error.

It helps identify:

* Where the error happened
* Which function called the failing function
* The path the program followed

---

## State

State is the information describing the program at a particular moment.

Examples include:

* Current score
* Logged-in user
* Selected card
* Inventory contents
* Current page

---

## Stateful

A stateful system remembers information between operations.

A shopping cart is stateful because earlier additions affect what it contains later.

---

## Stateless

A stateless operation does not depend on remembered information from previous operations.

Each request contains everything required to process it.

---

## Synchronous

Synchronous work happens in sequence.

Each operation waits for the previous operation to finish before continuing.

**Think of it as:** Waiting at the service desk until your request is complete before beginning another task.

---

## Syntax

Syntax is the grammar and structural rules of a programming language.

A syntax error means the code does not follow those rules and cannot be correctly understood.

---

# T

## Thread

A thread is a sequence of instructions being executed within a process.

A process may have one or multiple threads.

Threads can allow work to overlap, but shared information must be managed carefully.

---

## Token

Token can have several meanings.

### In programming languages

A meaningful piece of source code, such as a keyword, name or symbol.

### In authentication

A value used to prove identity or permission.

### In APIs and artificial intelligence

A measured unit of text or usage.

The intended meaning depends heavily on context.

---

## Transaction

A transaction is a controlled group of operations treated as one complete unit.

Transactions commonly aim to ensure that changes are:

* Completed together
* Consistent
* Recoverable if something fails

Database transactions are often atomic.

---

## Tree

A tree is a data structure made from connected parent and child nodes.

Trees can represent:

* Folders
* Menus
* Organisation charts
* HTML documents
* Decision paths

---

## Type

A type describes the kind of information a value represents and which operations are valid for it.

Examples include:

* Number
* String
* Boolean
* Array
* Object

---

## Type Coercion

Type coercion occurs when a language automatically converts a value from one type to another.

JavaScript sometimes performs implicit type coercion.

This can be convenient, but may also produce surprising results.

---

## TypeScript

TypeScript is a language built on JavaScript that adds static type checking and additional development features.

TypeScript code is transformed into JavaScript before it runs.

---

# U

## Undefined

In JavaScript, `undefined` usually means that a value has not been assigned or is not available.

This differs slightly from `null`, which often represents an intentional absence.

---

## Unit Test

A unit test checks one small part of a program in isolation.

Examples include testing whether:

* A conversion function returns the correct result
* A score calculation works
* A validation rule accepts or rejects the correct values

---

## URL

URL stands for Uniform Resource Locator.

A URL is the address used to locate a resource, such as:

* A webpage
* An image
* An API endpoint
* A file

---

# V

## Validation

Validation checks whether information meets required rules before it is accepted or used.

Examples include checking:

* Required fields
* Number ranges
* Date formats
* Password length
* Allowed values

---

## Value

A value is one piece of information used by a program.

Examples include:

* `42`
* `"Hello"`
* `false`
* An array
* An object

---

## Variable

A variable is a named place used to hold or refer to a value.

---

## Version

A version identifies a particular state or release of software.

Versions often use numbers such as:

`2.4.1`

A common interpretation is:

* Major version
* Minor version
* Patch version

The exact versioning rules depend on the project.

---

## Version Control

Version control records changes made to files over time.

It allows developers to:

* Review history
* Compare versions
* Restore earlier work
* Work on branches
* Combine changes
* Collaborate safely

Git is a common version-control system.

---

## Virtual Machine

A virtual machine is a software-based computer environment that behaves like a separate machine.

Virtual machines can isolate operating systems, applications and development environments.

Some programming languages also execute within specialised virtual machines.

---

# W

## Webhook

A webhook allows one system to send information to another when an event occurs.

Unlike polling, the receiving system does not need to repeatedly ask whether something has changed.

**Think of it as:** Asking someone to call you when the package arrives instead of checking the front door every five minutes.

---

## Wrapper

A wrapper is code that surrounds another piece of code or system to provide a simpler, safer or more convenient way to use it.

**Think of it as:** A simpler control panel placed in front of a complicated machine.

---

# Commonly Confused Terms

## Parameter != Argument

Parameter:

The named input in the function definition.

Argument:

The actual value supplied when the function is called.

They exist in the same space because both describe data being passed into a function. The critical difference is location: a parameter belongs to the function's definition, while an argument belongs to a specific function call.

---

## Authentication != Authorisation

Authentication:

Who are you?

Authorisation:

What are you allowed to do?

They exist in the same space because both are part of access control. The critical difference is sequence and purpose: authentication proves identity, while authorisation checks which actions that proven identity is permitted to perform.

---

## Encoding != Encryption != Hashing != Obfuscation

Encoding:

Changes representation for compatibility or transport.

Encryption:

Protects information using a key and is intended to be reversible by an authorised party.

Hashing:

Produces a one-way result, commonly for comparison or verification.

Obfuscation:

Makes something harder for a person to understand, but does not provide strong security.

They exist in the same space because each transforms information from one form into another. The critical differences are intent and reversibility: encoding is for compatibility and is easily reversed, encryption is for confidentiality and needs a key, hashing is generally one-way for comparison or verification, and obfuscation hides meaning from casual readers without providing strong protection.

---

## Mutable != Immutable

Mutable:

Can be changed after creation.

Immutable:

Cannot be changed after creation. A new version must be created instead.

They exist in the same space because both describe whether data can change over time. The critical difference is update behaviour: mutable values can be altered in place, while immutable values require creating a replacement value for each change.

---

## Synchronous != Asynchronous

Synchronous:

Wait for the current operation to finish.

Asynchronous:

Begin the operation and allow other work to continue while waiting.

They exist in the same space because both describe how work is scheduled and completed. The critical difference is whether execution waits: synchronous code blocks the next step until the current step finishes, while asynchronous code lets the program continue and handle the result later.

---

## Concurrent != Parallel

Concurrent:

Multiple tasks are being managed during overlapping periods.

Parallel:

Multiple tasks are literally running at the same time.

Parallel work is concurrent, but concurrent work is not always parallel.

They exist in the same space because both describe multiple tasks being handled. The critical difference is physical execution: concurrent work overlaps in time and may switch between tasks, while parallel work literally runs at the same time on separate execution resources.

---

## Null != Undefined

Null:

Usually an intentional absence of a value.

Undefined:

Usually a value has not been provided or assigned.

They exist in the same space because both can represent missing information. The critical difference is intent: null is usually deliberately set to mean "no value", while undefined usually means no value has been assigned or found.

---

## Function != Method

Function:

A reusable named action.

Method:

A function associated with an object or class.

They exist in the same space because both are callable blocks of behaviour. The critical difference is ownership: a function can stand on its own, while a method is attached to an object, class, or similar structure and is usually called through that owner.

---

## Library != Framework

Library:

A collection of tools your code calls.

Framework:

A larger structure that often controls application flow and calls your code.

They exist in the same space because both provide reusable structure for building software. The critical difference is control: with a library, your code usually decides when to call it; with a framework, your code often fits into rules and lifecycle points controlled by the framework.

---

## Frontend != Backend

Frontend:

The visible and interactive part used by the user.

Backend:

The behind-the-scenes processing, storage and services.

They exist in the same space because both are parts of an application. The critical difference is responsibility: the frontend presents interaction in the user's environment, while the backend handles server-side logic, persistence, rules, and integration that the user usually does not see directly.

---

## Compile != Interpret

Compile:

Translate code before or during execution into another representation.

Interpret:

Read and execute code more directly.

Modern language runtimes often use a combination of both.

They exist in the same space because both are ways source code becomes running behaviour. The critical difference is when and how translation happens: compilation translates code into another form before or during execution, while interpretation reads and executes code more directly as the program runs.

---

## Atomic != Idempotent

Atomic:

The operation happens completely or not at all.

Idempotent:

Repeating the operation has the same final effect as performing it once.

An operation can be one, both or neither.

They exist in the same space because both describe reliability properties of operations. The critical difference is what property is guaranteed: atomicity is about all-or-nothing completion, while idempotency is about repeated attempts producing the same final state as one attempt.

---

## State != Persistence

State:

What the program currently remembers.

Persistence:

How information survives after the current session or process ends.

They exist in the same space because both deal with information an application uses. The critical difference is duration: state is what the program knows at a moment in time, while persistence is the mechanism that keeps selected information available after reloads, restarts, or sessions.

---

## Bug != Error != Exception

Bug:

A defect in the program.

Error:

A problem detected while reading or running it.

Exception:

A specific reported interruption that code may be able to catch and handle.

They exist in the same space because all three relate to things going wrong in software. The critical differences are level and form: a bug is the underlying defect, an error is a detected problem or failure condition, and an exception is a specific runtime signal that may interrupt execution and be handled by code.

---

## Repository != Branch != Commit

Repository:

The version-controlled project and its history.

Branch:

An independent line of development.

Commit:

A recorded checkpoint containing a group of changes.

They exist in the same space because all three are core version-control concepts. The critical differences are scale and role: a repository is the whole tracked project, a branch is one line of development inside it, and a commit is one saved checkpoint of changes on a branch.

---

# Final Reminder

Experienced programmers regularly look up terminology.

Knowing that a word exists, recognising its general purpose and knowing where to find a fuller explanation is often more useful than memorising a perfect definition.
