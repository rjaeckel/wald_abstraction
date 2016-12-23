var test=/^(((?:ht|f)tp)s?:\/\/(([^:\/]+)(?::([0-9]+))?(?=\/)))?((?=.)((\/)?(?:[^?\/#]+\/)+)?((([^\/?#]*)(?:\?([^#]*))?)(?:#(.*))?)?)$/;



var newOne = /^
(?'remote'
(?'proto'(?:ht|f)tp(?'secure'[s])?)://
    (?'server'
    (?'ip'(?>(?>2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(?>2[0-4]\d|25[0-5]|[01]?\d\d?))
|
(?'hostname'(?:\w|\w[-\w]{0,61}\w)(?:\.(?:\w|\w[-\w]{0,61}\w))*)
)
(?>:(?'port'[1-9][\d]*))?
(?=/|$)
)?
(?'local'(?=.)
(?'dir'(?'abs'/)?(?>[^/?#]+/)+)?
    (?'file'(?'base'[^/?#]+)(?>\.(?'ext'[^/?#.]+)))?
    (?'query'\?(?>(?=[[:print:]])[^\?\#])+)*
(?'anchor'\#(?>(?=[[:print:]])[^\#])+)*
)?(?<=.)$/