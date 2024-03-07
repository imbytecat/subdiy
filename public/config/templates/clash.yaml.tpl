port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
dns:
  enable: true
  ipv6: false
{% if default(request.clash.dns, "") == "china-doh" %}
  default-server:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
{% else if default(request.clash.dns, "") == "self-doh" %}
  default-server:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://agh.lililili.net/1437bb45-7db3-4878-b836-091161dc37d7
{% else if default(request.clash.dns, "") == "google-doh" %}
  default-server:
    - 8.8.8.8
    - 8.8.4.4
  nameserver:
    - https://dns.google/dns-query
{% else if default(request.clash.dns, "") == "cloudflare-doh" %}
  default-server:
    - 1.1.1.1
    - 1.0.0.1
  nameserver:
    - https://cloudflare-dns.com/dns-query
{% else %}
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
{% endif %}
  fake-ip-filter:
    - +.msftncsi.com
    - +.msftconnecttest.com
    - msftconnecttest.com
    - localhost.ptlogin2.qq.com
