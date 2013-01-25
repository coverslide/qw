# qw

Perl's qw for JavaScript. It's very simple and doesn't do a whole lot, more of a time saver when you need an Array of strings. Basically `.split(/\s+/g)`, or the opposite of `.join(' ')`

# Installation

        npm install qw

# Usage

        //Barewords don't work like in Perl, so we use a string
        qw('google yahoo facebook').forEach(function(name){
          hack('www.' + name + '.com')
        })


# Reason

There are times when I need an array of strings, and `['a', 'b', 'c']` gets pretty tedious to write, especially if I find myself editing that array frequently. Using `.split(/\s+/g)` is fine too, but it became tedious when I had to do this multiple times in a project.
