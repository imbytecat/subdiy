port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
{% if default(request.clash.dns, "") == "china-doh" %}
dns:
  enable: true
  ipv6: false
  default-server:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
{% else if default(request.clash.dns, "") == "self-doh" %}
dns:
  enable: true
  ipv6: false
  default-server:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  nameserver:
    - https://doge.lililili.net/8471c1ee-1a45-4b1d-af61-66ab8a33a03b
{% else if default(request.clash.dns, "") == "google-doh" %}
dns:
  enable: true
  ipv6: false
  default-server:
    - 8.8.8.8
    - 8.8.4.4
  nameserver:
    - https://dns.google/dns-query
{% else if default(request.clash.dns, "") == "cloudflare-doh" %}
dns:
  enable: true
  ipv6: false
  default-server:
    - 1.1.1.1
    - 1.0.0.1
  nameserver:
    - https://cloudflare-dns.com/dns-query
{% endif %}
