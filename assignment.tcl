# Solution 1
proc compressionString {str} {
    set output answer=> ;
    set repetition 1;
    for { set i 0} {$i < [string length $str]} {incr i} {
    set current [string index $str $i];
    set next [string index $str [expr $i + 1]];
    if { ![string compare $current $next] } { 
        incr repetition;
    } else {
        append output $current$repetition
        set repetition 1;
    };
}
return $output
}

puts [compressionString "aabcccccaaa"];

# Solution 3
proc check {str , arr} {
    set include true;
    for { set i 0} { $i <= [llength $arr] } {incr i} {
      if { ![string compare [lindex $arr  $i] $str] } {
            set include false;
      }
    }
    return $include;
}

proc uiqueList {arr} {
    set uniqueItems {};
    for { set i 0} { $i <= [llength $arr] } {incr i} {
        if {[check [lindex $arr  $i] , $uniqueItems]} {
            lappend uniqueItems [lindex $arr  $i] ;
        }
    }
    return $uniqueItems;
}

puts [uiqueList [set testArray { "3" "6" "8" "tx" "3" "7" "1" "4" "tx" "6" "2" "9" "6" }] ];

# Solution 2
proc readFiles {fileName} {
    set fp [open $fileName r]
    set filedData [read $fp]
    close $fp
    set sumFirst2 0;
    set concatenationFirst3 '';
    set primeCount 0;
    set notPrimeCount 0;
    set stringCount 0;
    set invalid 0;
    set max 0;
    set min 0;
    puts [llength $filedData];
    for { set i 0} {$i < [llength $filedData]} {incr i} {
        puts line[expr $i + 1]:[string index $filedData $i]length:[llength [string [index $filedData $i]];
    }
    set item [string index $filedData $i];
    if{[string is double $item]}{
        if {$item > $max} {
            set max $item;
        }
        if {min == 0} {
            set min $item;
        }
        if {$item < $max} {
            set min $item;
        }
        if {[[expr $primeCount + $notPrimeCount] < 2]} {
            incr sumFirst2;
        }
        if([isPrime $item]) {
            puts [expr $item / 2];
            incr primeCount;
        } else {
            puts [expr $item * 3.25];
        }
    } elseif {![string is string $item]} {
        if {stringCount > 3} {
            lappend concatenationFirst3 $item;
        }
        incr stringCount;
    } else {
        incr invalid;
    }
    puts Report:Strings:$stringCount,Prime:$primeCount,NotPrime:$notPrimeCount,Invalid:$invalid.;
    puts Summationofthefirsttwointeger$sumFirst2.;
    puts Concatenationofthefirsthreestrings$concatenationFirst3.;
    puts Themaxvalueis$maxandtheminvalueis$min.
}

puts [readFiles input.txt ];